import { TestBed, inject } from '@angular/core/testing';

import { UrlListService } from './url-list.service';

describe('UrlListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlListService]
    });
  });

  it('should be created', inject([UrlListService], (service: UrlListService) => {
    expect(service).toBeTruthy();
  }));
});
