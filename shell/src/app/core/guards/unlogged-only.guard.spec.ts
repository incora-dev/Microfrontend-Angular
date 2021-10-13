import { TestBed } from '@angular/core/testing';

import { UnloggedOnlyGuard } from './unlogged-only.guard';

describe('UnloggedOnlyGuard', () => {
  let guard: UnloggedOnlyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnloggedOnlyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
