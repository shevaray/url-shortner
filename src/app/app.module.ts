import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { UrlShortenerModule } from "./url-shortener/url-shortener.module";
import { StoreModule } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./url-shortener/url-shortener.module").then(
        (m) => m.UrlShortenerModule
      ),
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    EffectsModule.forRoot([]),
    BrowserModule,
    HttpClientModule,
    UrlShortenerModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
