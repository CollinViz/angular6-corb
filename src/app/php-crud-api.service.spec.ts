import { TestBed, inject } from '@angular/core/testing';

import { PhpCrudApiService } from './php-crud-api.service';

describe('PhpCrudApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhpCrudApiService]
    });
  });

  it('should be created', inject([PhpCrudApiService], (service: PhpCrudApiService) => {
    expect(service).toBeTruthy();
  }));
});
