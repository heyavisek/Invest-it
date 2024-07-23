import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StocksService } from '../../services/stocks.service';
import { StockSearchItem } from '../../models/stock.search.item.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddWatchlistDialogComponent } from '../../../features/watchlists-sectioin/components/add-watchlist-dialog/add-watchlist-dialog.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  inputData: string = '';
  data: StockSearchItem[] = [];
  searchResult: StockSearchItem[] = [];
  isFocusedInInput: boolean = false;
  isLoaded: boolean = false;
  setTime: any;

  constructor(private stocksService: StocksService, private dialog: MatDialog) {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', (e: any) => {
        if (!document.getElementById('searchContainer')?.contains(e.target)) {
          this.isFocusedInInput = false;
        }
      });
    }
  }

  onSearchTextChange(): void {
    window.clearTimeout(this.setTime);

    this.setTime = setTimeout(() => {
      this.isLoaded = false;

      this.stocksService
        .searchStocksList(this.inputData ?? '')
        .subscribe((response) => {
          this.data = response.bestMatches;
          this.isLoaded = true;
          if (this.data) {
            this.searchResult = this.data;
          } else {
            this.searchResult = [];
          }
        });
    }, 500);
  }

  hasFocusedInInput(isFocus: boolean) {
    this.isFocusedInInput = isFocus;
  }
  openAddToWatchlist(id: number) {
    console.log(id);
    const dialogRef = this.dialog.open(AddWatchlistDialogComponent, {
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('after closed.');
    });
  }
}
