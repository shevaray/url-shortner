import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UrlShortenerComponent } from "./url-shortener.component";

const routes: Routes = [{ path: "", component: UrlShortenerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrlShortenerRoutingModule {}
