import { TestBed } from '@angular/core/testing';

import { AlertSenderService } from './alert-sender.service';

describe('AlertSenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertSenderService = TestBed.get(AlertSenderService);
    expect(service).toBeTruthy();
  });
});
