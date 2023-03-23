import { createReducer, on } from "@ngrx/store";
import { initialUrlState, ResultInitialState } from "./url-shortener.state";
import * as urlActionTypes from "./url-shortner.action";

export const urlShortenerReducer = createReducer(
  initialUrlState,
  on(urlActionTypes.loadUrl, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
      result: ResultInitialState,
    };
  }),
  on(urlActionTypes.loadUrlSuccess, (state, { payload }) => {
    return { ...state, loading: false, result: payload, error: null };
  }),
  on(urlActionTypes.loadUrlFail, (state, { message }) => ({
    ...state,
    loading: false,
    error: message,
    result: ResultInitialState,
  }))
);
