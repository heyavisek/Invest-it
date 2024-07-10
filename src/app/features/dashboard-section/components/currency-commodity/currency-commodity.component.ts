import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RealtimeWebsocketService } from '../../../../shared/services/realtime.websocket.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SelectorButtonComponent } from "../selector-button/selector-button.component";

@Component({
  selector: 'app-currency-commodity',
  standalone: true,
  imports: [CommonModule, SelectorButtonComponent],
  templateUrl: './currency-commodity.component.html',
  styleUrl: './currency-commodity.component.scss',
})
export class CurrencyCommodityComponent
  implements OnInit, AfterViewChecked, OnDestroy
{
  message: any = [];
  subscription: any;
  isMessageSent: boolean = false;
  messageLength: number = 50

  constructor(
    private webSocketService: RealtimeWebsocketService,
    private cdr: ChangeDetectorRef
  ) {}
  ngAfterViewChecked(): void {
    this.moveToTop();
  }

  ngOnInit(): void {
    this.subscription = this.webSocketService.connect().subscribe((res) => {
      // console.log(res.data[0])
      if (this.isMessageSent) {
        if (res.data !== undefined && res.data[0].markPrice !== undefined) {
          this.message.unshift({
            symbol: res.data[0].symbol,
            value: res.data[0].markPrice,
          });
          if(this.message.length === this.messageLength+1){
            this.message.pop()
          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.webSocketService.closeConnection();
  }

  sendMessage() {
    if (!this.isMessageSent) {
      this.isMessageSent = true;
      this.webSocketService.sendMessage({
        op: 'subscribe',
        args: ['instrument'],
      });
    }
  }

  disconnect() {
    this.isMessageSent = false
    this.subscription.unsubscribe();
    this.webSocketService.closeConnection();
  }

  moveToTop() {
    if ( typeof document === "undefined"){
      return
    }
    const listContainer = <HTMLElement> document.getElementById('list-conainer');
    listContainer.scrollTop = -listContainer.scrollHeight;
  }
}
