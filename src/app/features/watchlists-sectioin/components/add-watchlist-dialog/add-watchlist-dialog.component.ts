import { Component } from '@angular/core';
import { WatchListTab } from '../../../../shared/models/watchlist.tabs.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-watchlist-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-watchlist-dialog.component.html',
  styleUrl: './add-watchlist-dialog.component.scss',
})
export class AddWatchlistDialogComponent {
  newWatchList: WatchListTab = new WatchListTab();
  name: string = '';
}
