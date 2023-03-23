import { TestBed } from "@angular/core/testing";

import { UrlShortenerService } from "./url-shortener.service";

describe("UrlShortnerService", () => {
  let service: UrlShortenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlShortenerService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
