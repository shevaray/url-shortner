import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UrlResult } from "src/app/url-shortener/store/url-shortener.state";
import { environment } from "src/environments/environment";
import { HttpConfig } from "../config/url.config";

@Injectable({
  providedIn: "root",
})
export class UrlShortenerService {
  constructor(private http: HttpClient) {}

  shortenUrl(qParms: any): Observable<{ result: UrlResult }> {
    return this.http.get<{ result: UrlResult }>(
      environment.baseUrl + HttpConfig.urlShortener,
      {
        params: { url: qParms },
      }
    );
  }
}
