import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorButtonComponent } from '../selector-button/selector-button.component';
import { StocksService } from '../../../../shared/services/stocks.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Stocks } from '../../../../shared/models/stocks.model';

@Component({
  selector: 'app-top-movers',
  standalone: true,
  imports: [SelectorButtonComponent, CommonModule, HttpClientModule],
  templateUrl: './top-movers.component.html',
  styleUrl: './top-movers.component.scss',
})

export class TopMoversComponent implements AfterViewInit {
  topMovers: Stocks[] = [];
  tabSelected: number = 0;
  data: any = {};

  constructor(private stocksService: StocksService) {}


  ngAfterViewInit(): void {
    setTimeout(() => {
      const data = this.stocksService.getTopMoversListStocks().subscribe((response) => {
        const data: JSON = JSON.parse(JSON.stringify(response));
        this.data = data;
        this.topMovers = this.data.top_gainers;
      });
    }, 0);
  }

  onTabChange(selected: number): void {
    // this.stocksService.getStockData().subscribe((response)=>{
    //   console.log(response)
    // })

    this.tabSelected = selected;

    switch (this.tabSelected) {
      case 0:
        this.topMovers = this.data.top_gainers;
        break;
      case 1:
        this.topMovers = this.data.top_losers;
        break;
      default:
        this.topMovers = this.data.most_actively_traded;
    }
  }

  getChangeStatus(string?: string): boolean {
    return parseFloat(string !== undefined ? string.split('%')[0] : '0') > 0;
  }
}
