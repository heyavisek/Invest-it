import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RealtimeWebsocketService } from '../../../../shared/services/realtime.websocket.service';
import { reduce, Subscription } from 'rxjs';
import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { SelectorButtonComponent } from '../selector-button/selector-button.component';
import { Stocks } from '../../../../shared/models/stocks.model';

@Component({
  selector: 'app-currency-commodity',
  standalone: true,
  imports: [CommonModule, SelectorButtonComponent, DecimalPipe, CurrencyPipe],
  templateUrl: './currency-commodity.component.html',
  styleUrl: './currency-commodity.component.scss',
})
export class CurrencyCommodityComponent
  implements OnInit, AfterViewChecked, OnDestroy
{
  message: any = [];
  messageLength: number = 10;
  dataMap: Map<string, string> = new Map();
  newValue: Stocks[] = [];

  constructor(private webSocketService: RealtimeWebsocketService) {}

  ngAfterViewChecked(): void {
    this.moveToTop();
  }

  ngOnInit(): void {
    this.webSocketService.connect().subscribe({
      next: (res) => {
        if (res.data !== undefined && res.data[0].markPrice !== undefined) {
          // this.message.unshift({
          //   symbol: res.data[0].symbol,
          //   value: res.data[0].markPrice,
          // });

          if (this.dataMap.size < this.messageLength) {
            this.dataMap.set(res.data[0].symbol, res.data[0].markPrice);
            this.newValue = Array.from(this.dataMap, ([key, value]) => ({
              ticker: key,
              price: value,
            }));
          }
          if (
            this.dataMap.has(res.data[0].symbol) &&
            this.dataMap.get(res.data[0].symbol) !== res.data[0].markPrice
          ) {
            this.dataMap.set(res.data[0].symbol, res.data[0].markPrice);
            this.newValue = Array.from(this.dataMap, ([key, value]) => ({
              ticker: key,
              price: value,
            }));
            // console.log(this.newValue)
          }

          // if (this.message.length === this.messageLength + 1) {
          //   this.message.pop();
          // }
        } else if (res.error !== undefined) {
          this.message.unshift({
            symbol: 'Unrecognized request.',
            value: '',
          });
        }
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.webSocketService.sendMessage({
      op: 'subscribe',
      args: ['instrument'],
    });
  }

  ngOnDestroy(): void {
    this.webSocketService.closeConnection();
  }

  moveToTop() {
    if (typeof document === 'undefined') {
      return;
    }
    const listContainer = <HTMLElement>document.getElementById('list-conainer');
    listContainer.scrollTop = -listContainer.scrollHeight;
  }
}
