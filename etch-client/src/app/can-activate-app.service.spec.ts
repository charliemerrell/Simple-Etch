import { TestBed } from '@angular/core/testing';

import { CanActivateAppService } from './can-activate-app.service';

describe('CanActivateAppService', () => {
  let service: CanActivateAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivateAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
