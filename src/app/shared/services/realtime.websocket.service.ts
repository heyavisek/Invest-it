import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
const WS_ENDPOINT = "wss://ws.bitmex.com/realtime"


@Injectable({
  providedIn: 'root'
})
export class RealtimeWebsocketService {
  private socket : WebSocketSubject<any>;
  constructor() { 
    if (typeof global !== 'undefined') {
      (global as any).WebSocket = require('ws');
  }
    this.socket = webSocket(WS_ENDPOINT)
    
  }

  public connect(): Observable<any>{
    return this.socket.asObservable()
  }

  public sendMessage(message: any){
    this.socket.next(message)
  }

  public closeConnection(): void{
    this.socket.complete()
  }
}
