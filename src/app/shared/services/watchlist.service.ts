import { Injectable } from '@angular/core';
import { watchListTabData } from '../data/watchlist.tab.data';
import { WatchListTab } from '../models/watchlist.tabs.model';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  constructor() {}

  getWatchListTab(): WatchListTab[] {
    return watchListTabData
  }
  
}
