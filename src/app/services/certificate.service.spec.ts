import { TestBed, inject } from '@angular/core/testing';

import { CertificateService } from './certificate.service';

describe('CertificateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CertificateService]
    });
  });

  it('should ...', inject([CertificateService], (service: CertificateService) => {
    expect(service).toBeTruthy();
  }));
});
