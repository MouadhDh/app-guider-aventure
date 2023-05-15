import { TestBed } from '@angular/core/testing';

import { MyserviceService } from './myservice.service';

describe('MyserviceService', () => {
  let service: MyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyserviceService]
    });
    service = TestBed.inject(MyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct message', () => {
    const message = 'Hello, world!';
    expect(service.getMessage()).toBe(message);
  });

  // Add more test cases as needed...
});
