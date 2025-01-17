import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { listWatchList } from '../data/list.watchlist.data';
const WS_ENDPOINT = 'wss://ws.bitmex.com/realtime';

@Injectable({
  providedIn: 'root',
})
export class RealtimeWebsocketService {
  watchlistMessage = listWatchList
  private subject: WebSocketSubject<any>;
  constructor() {
    if (typeof global !== 'undefined') {
      (global as any).WebSocket = require('ws');
    }
    this.subject = webSocket(WS_ENDPOINT);
  }

  public connect(): Observable<any> {
    return this.subject.asObservable()
  }

  sendMessage(message : any) {
    return this.subject.next(message);
  }

  public closeConnection(): void {
    this.subject.complete();
  }
}
