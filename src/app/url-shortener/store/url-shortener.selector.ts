import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UrlState } from "./url-shortener.state";

export const urlFeatureSelector = createFeatureSelector<UrlState>(
  "url_shortener"
);
export const getUrlResult = createSelector(
  urlFeatureSelector,
  (state) => state.result
);
export const getLoading = createSelector(
  urlFeatureSelector,
  (state) => state.loading
);
export const getError = createSelector(
  urlFeatureSelector,
  (state) => state.error
);
export const urlHasDataAndNotLoading = createSelector(
  getUrlResult,
  getLoading,
  (urlData, loadingData) => urlData && !loadingData
);

export const urlHasErrorAndNotLoading = createSelector(
  getError,
  getLoading,
  (errorData, loadingData) => errorData && !loadingData
);
