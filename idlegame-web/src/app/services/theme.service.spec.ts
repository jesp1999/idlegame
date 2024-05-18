import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a default dark mode of false', () => {
    expect(service.isDarkMode()).toBeTrue();
  });

  it('should be able to set dark mode', () => {
    service.setDarkMode(true);
    expect(service.isDarkMode()).toBeTrue();
  });

  it('should be able to unset dark mode', () => {
    service.setDarkMode(false);
    expect(service.isDarkMode()).toBeFalse();
  });
});
