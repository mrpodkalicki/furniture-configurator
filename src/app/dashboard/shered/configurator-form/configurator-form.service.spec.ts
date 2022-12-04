import { TestBed } from '@angular/core/testing';

import { ConfiguratorFormService } from './configurator-form.service';

describe('ConfiguratorFormService', () => {
  let service: ConfiguratorFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguratorFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
