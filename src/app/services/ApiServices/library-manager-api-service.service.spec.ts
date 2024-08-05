import { TestBed } from '@angular/core/testing';

import { LibraryManagerApiService } from './library-manager-api-service.service';

describe('LibraryManagerApiServiceService', () => {
  let service: LibraryManagerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryManagerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
