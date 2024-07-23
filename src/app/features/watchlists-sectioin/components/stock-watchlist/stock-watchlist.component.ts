import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-watchlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-watchlist.component.html',
  styleUrl: './stock-watchlist.component.scss',
})
export class StockWatchlistComponent implements OnInit {
  @Input() stocksList: any = [];
  selectedStocksList: boolean[] = [];
  change = 2.3;

  ngOnInit(): void {}

  selectAllBox(e: any) {
    this.selectedStocksList = new Array(this.stocksList.length).fill(
      e.target.checked
    );
  }

  onCheckBoxClick(index: number) {
    console.log(index, this.stocksList.length);
    this.selectedStocksList[index] = !this.selectedStocksList[index];
  }
}
