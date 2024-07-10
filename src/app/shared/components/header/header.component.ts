import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StocksService } from '../../services/stocks.service';
import { StockSearchItem } from '../../models/stock.search.item.model';
import { response } from 'express';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  inputData: string = '';
  data: StockSearchItem[] = []
  searchResult: StockSearchItem[] = [];

  constructor(private stocksService: StocksService) {}

  onSearchTextChange(): void {
    
    if (this.inputData.length > 0 ) {
      // if (this.inputData.length > 1){
      //   this.searchResult = this.data.filter((item: StockSearchItem) => {
      //     return item["1. symbol"].toLowerCase().includes(this.inputData.toLowerCase()) || item["2. name"].toLowerCase().includes(this.inputData.toLowerCase());
      //   });
      // }else{
      //   this.stocksService.searchStocksList(this.inputData).subscribe((response)=>{
      //     this.data = response.bestMatches
      //     this.searchResult = this.data
      //   })
      // }
      this.stocksService.searchStocksList(this.inputData).subscribe((response)=>{
        this.data = response.bestMatches
        this.searchResult = this.data
      })
    } else {
      this.searchResult = [];
    }
  }
}
