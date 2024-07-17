import { Component, Input } from '@angular/core';
import { WatchListTab } from '../../../../shared/models/watchlist.tabs.model';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddWatchlistDialogComponent } from '../add-watchlist-dialog/add-watchlist-dialog.component';

@Component({
  selector: 'app-tab-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-button.component.html',
  styleUrl: './tab-button.component.scss',
})
export class TabButtonComponent {
  @Input() tabItem: WatchListTab = new WatchListTab();
  @Input() isSelected: boolean = false;

  openWatchlistEdit(id?: number) {
    console.log(id);
  }
}
