import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StocksService } from '../../services/stocks.service';
import { StockSearchItem } from '../../models/stock.search.item.model';

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

  constructor(private stocksService: StocksService) {}

  onSearchTextChange(): void {

    window.clearTimeout(this.setTime);

    this.setTime = setTimeout(() => {
      this.isLoaded = false

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
  
}
