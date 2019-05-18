import { TestBed } from '@angular/core/testing';

import { ContactoServiceService } from './contacto-service.service';

describe('ContactoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactoServiceService = TestBed.get(ContactoServiceService);
    expect(service).toBeTruthy();
  });
});
