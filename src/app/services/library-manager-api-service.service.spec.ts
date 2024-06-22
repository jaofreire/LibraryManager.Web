import { TestBed } from '@angular/core/testing';

import { LibraryManagerApiServiceService } from './library-manager-api-service.service';

describe('LibraryManagerApiServiceService', () => {
  let service: LibraryManagerApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryManagerApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
