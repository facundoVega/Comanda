import { TestBed } from '@angular/core/testing';

import { ValidadoraService } from './validadora.service';

describe('ValidadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidadoraService = TestBed.get(ValidadoraService);
    expect(service).toBeTruthy();
  });
});
