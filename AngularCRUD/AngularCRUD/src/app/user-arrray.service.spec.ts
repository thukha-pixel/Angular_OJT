import { TestBed } from '@angular/core/testing';

import { UserArrrayService } from './user-arrray.service';

describe('UserArrrayService', () => {
  let service: UserArrrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserArrrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
