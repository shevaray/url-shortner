import { createAction, props } from "@ngrx/store";
import { UrlResult } from "./url-shortener.state";

export const loadUrl = createAction(
  "[Url Page] load Url",
  props<{ url: string }>()
);

export const loadUrlSuccess = createAction(
  "[Url Page] load Url Success",
  props<{ payload: UrlResult }>()
);

export const loadUrlFail = createAction(
  "[Url Page] load Url Fail",
  props<{ message: string }>()
);
