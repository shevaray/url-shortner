import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs";
import { UrlShortenerService } from "src/app/core/services/url-shortener.service";
import { loadUrl, loadUrlFail, loadUrlSuccess } from "./url-shortner.action";

@Injectable()
export class UrlShortenerEffects {
  constructor(
    private urlShortenerSrv: UrlShortenerService,
    private actions$: Actions
  ) {}

  loadUrl$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUrl),
      switchMap((action) =>
        this.urlShortenerSrv.shortenUrl(action.url).pipe(
          map((data) => loadUrlSuccess({ payload: data.result })),
          catchError(async (err) => loadUrlFail({ message: err.error.error }))
        )
      )
    )
  );
}
