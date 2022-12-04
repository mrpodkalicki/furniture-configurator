import { TestBed } from '@angular/core/testing';

import { FormBuilderFactor } from './form-builder.factor';

describe('FormBuilderService', () => {
  let service: FormBuilderFactor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormBuilderFactor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
