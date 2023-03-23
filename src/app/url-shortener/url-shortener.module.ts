import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { urlShortenerReducer } from "./store/url-shortner.reducer";
import { UrlShortenerRoutingModule } from "./url-shortener-routing.module";
import { UrlShortenerComponent } from "./url-shortener.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { UrlShortenerEffects } from "./store/url-shortener.effects";

@NgModule({
  declarations: [UrlShortenerComponent],
  imports: [
    CommonModule,
    UrlShortenerRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature("url_shortener", urlShortenerReducer),
    EffectsModule.forFeature([UrlShortenerEffects]),
  ],
})
export class UrlShortenerModule {}
