import { TestBed } from '@angular/core/testing';

import { LoggedOnlyGuard } from './logged-only.guard';

describe('LoggedOnlyGuard', () => {
  let guard: LoggedOnlyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedOnlyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
