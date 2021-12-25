/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CitydataService } from './citydata.service';

describe('Service: Citydata', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitydataService]
    });
  });

  it('should ...', inject([CitydataService], (service: CitydataService) => {
    expect(service).toBeTruthy();
  }));
});
