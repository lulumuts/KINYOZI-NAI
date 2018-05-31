import { TestBed, inject } from '@angular/core/testing';

import { HairService } from './hair.service';

describe('HairService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HairService]
    });
  });

  it('should be created', inject([HairService], (service: HairService) => {
    expect(service).toBeTruthy();
  }));
});
