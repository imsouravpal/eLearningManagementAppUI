import { TestBed } from '@angular/core/testing';

import { ModifycompanyShearedService } from './modifycompany-sheared.service';

describe('ModifycompanyShearedService', () => {
  let service: ModifycompanyShearedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifycompanyShearedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
