export interface UrlResult {
  code: string;
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  short_link3: string;
  full_short_link3: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
}

export const ResultInitialState = {
  code: "",
  short_link: "",
  full_short_link: "",
  short_link2: "",
  full_short_link2: "",
  short_link3: "",
  full_short_link3: "",
  share_link: "",
  full_share_link: "",
  original_link: "",
};

export interface UrlState {
  result: UrlResult;
  loading: boolean;
  error: string | null;
}

export const initialUrlState: UrlState = {
  result: ResultInitialState,
  loading: false,
  error: null,
};
