import { Component, Inject, OnInit } from '@angular/core';
import { WatchListTab } from '../../../../shared/models/watchlist.tabs.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { watchListTabData } from '../../../../shared/data/watchlist.data';

@Component({
  selector: 'app-add-watchlist-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-watchlist-dialog.component.html',
  styleUrl: './add-watchlist-dialog.component.scss',
})
export class AddWatchlistDialogComponent {
  newWatchList: WatchListTab[] = watchListTabData;
  newWatchListName: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string }) {}

  addToWatchList(id?: number) {
    console.log(id, 'is from dialog box');
  }

  addnewWatchList() {
    if (this.newWatchListName.length > 0) {
      this.newWatchList.push({
        id: this.newWatchList.length,
        name: this.newWatchListName,
      });
      this.newWatchListName = '';
    }
  }
}
