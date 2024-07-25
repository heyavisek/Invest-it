import { Component, Inject, OnInit } from '@angular/core';
import { WatchListTab } from '../../../../shared/models/watchlist.tabs.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { watchListTabData } from '../../../../shared/data/watchlist.tab.data';
import { listWatchList } from '../../../../shared/data/list.watchlist.data';

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
  newListWatchList: string[][] = listWatchList;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private dialogRef: MatDialogRef<AddWatchlistDialogComponent>
  ) {}

  addStockToWatchList(id?: number) {
    if (
      this.newListWatchList[id ?? 0].filter((value) => value === 'trade:XBTUSD')
        .length < 1
    ) {
      this.newListWatchList[id ?? 0].push('trade:XBTUSD');
      this.dialogRef.close();
    } else {
      console.log('already added');
    }
  }

  addNewWatchList() {
    if (this.newWatchListName.length > 0) {
      this.newWatchList.push({
        id: this.newWatchList.length,
        name: this.newWatchListName,
      });
      this.newWatchListName = '';
    }
  }
}
