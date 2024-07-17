import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-watchlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-watchlist.component.html',
  styleUrl: './stock-watchlist.component.scss'
})
export class StockWatchlistComponent {

  stocksList = [1, 3, 4,3,3,3,3,3,3]
  selectedStocksList = []
  change = 2.3

}
