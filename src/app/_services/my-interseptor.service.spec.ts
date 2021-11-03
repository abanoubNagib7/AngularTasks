import { TestBed } from '@angular/core/testing';

import { MyInterseptorService } from './my-interseptor.service';

describe('MyInterseptorService', () => {
  let service: MyInterseptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyInterseptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
