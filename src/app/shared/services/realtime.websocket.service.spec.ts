import { TestBed } from '@angular/core/testing';

import { RealtimeWebsocketService } from './realtime.websocket.service';

describe('RealtimeWebsocketService', () => {
  let service: RealtimeWebsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealtimeWebsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
