import { TestBed } from '@angular/core/testing';

import { AventureService } from './aventure.service';

describe('AventureService', () => {
  let service: AventureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AventureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
