import { Component } from '@angular/core';
import { WatchListTab } from '../../shared/models/watchlist.tabs.model';
import { WatchlistService } from '../../shared/services/watchlist.service';
import { CommonModule } from '@angular/common';
import { TabButtonComponent } from './components/tab-button/tab-button.component';
import { StockWatchlistComponent } from './components/stock-watchlist/stock-watchlist.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddWatchlistDialogComponent } from './components/add-watchlist-dialog/add-watchlist-dialog.component';

@Component({
  selector: 'app-watchlists-sectioin',
  standalone: true,
  imports: [
    CommonModule,
    TabButtonComponent,
    StockWatchlistComponent,
    AddWatchlistDialogComponent,
  ],
  templateUrl: './watchlists-sectioin.component.html',
  styleUrl: './watchlists-sectioin.component.scss',
})
export class WatchlistsSectioinComponent {
  selectedTab: number = 2;
  isDialogBoxOpened: boolean = true;

  watchListTab: WatchListTab[] = this.watchListService.getWatchListTab();

  constructor(private watchListService: WatchlistService) {}

  setTabSelected(id?: number) {
    this.selectedTab = id ?? 0;
  }

  openAddWatchList() {
    if (this.watchListTab.length < 7) {
      this.watchListTab.push({
        id: this.watchListTab.length,
        name: 'Watchlist',
      });
      console.log(this.watchListTab);
    }
  }

  openAddWatchListDialog() {
    this.isDialogBoxOpened = !this.isDialogBoxOpened;
  }
}
