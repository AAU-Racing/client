import { TestBed } from '@angular/core/testing';

import { NavMenuService } from './nav-menu.service';

describe('MenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavMenuService = TestBed.get(NavMenuService);
    expect(service).toBeTruthy();
  });
});
