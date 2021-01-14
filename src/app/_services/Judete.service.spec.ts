/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JudeteServiceService } from './Judete.service';

describe('Service: Judete', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JudeteServiceService]
    });
  });

  it('should ...', inject([JudeteServiceService], (service: JudeteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
