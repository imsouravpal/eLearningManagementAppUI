import { TestBed } from '@angular/core/testing';

import { CustomisedconfirmdialogService } from './customisedconfirmdialog.service';

describe('CustomisedconfirmdialogService', () => {
  let service: CustomisedconfirmdialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomisedconfirmdialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
