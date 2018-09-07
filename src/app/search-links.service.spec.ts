import { TestBed, inject } from '@angular/core/testing';

import { SearchLinksService } from './search-links.service';

describe('SearchLinksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchLinksService]
    });
  });

  it('should be created', inject([SearchLinksService], (service: SearchLinksService) => {
    expect(service).toBeTruthy();
  }));
});
