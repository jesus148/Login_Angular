import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isLogeedGuard } from './is-logeed.guard';

describe('isLogeedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isLogeedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
