import { AfterViewInit, Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorButtonComponent } from '../selector-button/selector-button.component';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-top-movers',
  standalone: true,
  imports: [SelectorButtonComponent, CommonModule],
  templateUrl: './top-movers.component.html',
  styleUrl: './top-movers.component.scss'
})
export class TopMoversComponent implements OnInit {
  topMovers: any;
  tabSelected : number = 0;

  constructor(private stocksService : StocksService){}
  

  ngOnInit(): void {
    this.onTabChange(0)
  }
  
  onTabChange(selected : number): void{
    this.tabSelected = selected;
    switch(this.tabSelected){
      case 0:
        this.topMovers = this.stocksService.getTopGainers()
        break;
      case 1:
        this.topMovers = this.stocksService.getTopLosers()
        break;
      default:
        this.topMovers = this.stocksService.getAllStocksList()
    }
  }

}

