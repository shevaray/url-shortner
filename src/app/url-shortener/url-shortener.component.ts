import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  getError,
  getUrlResult,
  urlHasDataAndNotLoading,
} from "./store/url-shortener.selector";
import { UrlResult } from "./store/url-shortener.state";
import { loadUrl } from "./store/url-shortner.action";

@Component({
  selector: "app-url-shortner",
  templateUrl: "./url-shortener.component.html",
  styleUrls: ["./url-shortener.component.scss"],
})
export class UrlShortenerComponent implements OnInit {
  urlShortenerForm!: FormGroup;
  urlResult$!: Observable<UrlResult>;
  urlResultLoader$!: Observable<boolean>;
  errorResponse$!: Observable<string | null>;

  constructor(private formBulider: FormBuilder, private store: Store) {
    this.urlShortenerForm = this.formBulider.group({
      url: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.urlResult$ = this.store.select(getUrlResult);
    this.urlResultLoader$ = this.store.select(urlHasDataAndNotLoading);
    this.errorResponse$ = this.store.select(getError);
  }

  onShortenUrl() {
    this.store.dispatch(loadUrl({ url: this.urlShortenerForm.value.url }));
  }
}
