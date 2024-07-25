import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { WatchListTab } from '../../shared/models/watchlist.tabs.model';
import { WatchlistService } from '../../shared/services/watchlist.service';
import { CommonModule } from '@angular/common';
import { TabButtonComponent } from './components/tab-button/tab-button.component';
import { StockWatchlistComponent } from './components/stock-watchlist/stock-watchlist.component';
import { AddWatchlistDialogComponent } from './components/add-watchlist-dialog/add-watchlist-dialog.component';
import { FormsModule } from '@angular/forms';
import { RealtimeWebsocketService } from '../../shared/services/realtime.websocket.service';
import { listWatchList } from '../../shared/data/list.watchlist.data';

@Component({
  selector: 'app-watchlists-sectioin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TabButtonComponent,
    StockWatchlistComponent,
    AddWatchlistDialogComponent,
  ],
  templateUrl: './watchlists-sectioin.component.html',
  styleUrl: './watchlists-sectioin.component.scss',
})
export class WatchlistsSectioinComponent
  implements OnInit, OnDestroy
{
  selectedTab: number = 2;
  isWatchListEdit: boolean = false;
  watchListName: string = '';
  stockDataMap: Map<string, string> = new Map();
  newValue: any = [];
  change: number = 3.5;
  watchListMessage : any = listWatchList

  watchListTab: WatchListTab[] = this.watchListService.getWatchListTab();

  constructor(
    private watchListService: WatchlistService,
    private websocketService: RealtimeWebsocketService
  ) {}


  ngOnInit(): void {
    this.websocketService.connect().subscribe({
      next: (res) => {
        if (res.success && res.subscribe) {
          const symbol = res.subscribe.split(':')[1];
          this.stockDataMap.set(symbol, '0');
          this.newValue = Array.from(this.stockDataMap, ([key, value]) => ({
            ticker: key,
            price: value,
          }));
        }
        if (res.data !== undefined) {
          if (
            this.stockDataMap.has(res.data[0].symbol) &&
            this.stockDataMap.get(res.data[0].symbol) !== res.data[0].price
          ) {
            this.stockDataMap.set(res.data[0].symbol, res.data[0].price);
            this.newValue = Array.from(this.stockDataMap, ([key, value]) => ({
              ticker: key,
              price: value,
            }));
          }
        }
      },
    });

    this.websocketService.sendMessage({
      op: 'subscribe',
      args: this.watchListMessage[this.selectedTab]
    });
  }


  setTabSelected(id?: number) {
    this.websocketService.sendMessage({
      op: 'unsubscribe',
      args: this.watchListMessage[this.selectedTab],
    });

    this.selectedTab = id ?? 0;
    this.stockDataMap.clear()

    
    this.websocketService.sendMessage({
      op: 'subscribe',
      args: this.watchListMessage[this.selectedTab],
    });
  }

  openAddWatchList() {
    if (this.watchListTab.length < 7 && this.watchListName.length) {
      this.watchListTab.push({
        id: this.watchListTab.length,
        name: `${this.watchListName}`,
      });
      this.watchListName = '';
    }
    this.openAddWatchListDialog();
  }

  openAddWatchListDialog() {
    this.isWatchListEdit = !this.isWatchListEdit;
  }

  ngOnDestroy(): void {
    this.websocketService.closeConnection();
  }
}
