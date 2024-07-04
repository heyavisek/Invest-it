import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StocksService } from '../../../core/service/stocks.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  inputData : string = '';
  data : any = this.stocksService.getAllStocksList()
  searchResult: any = []

  constructor(private stocksService: StocksService){}

  onSearchTextChange() : void {
    if (this.inputData !== ''){
      this.searchResult = this.data.filter((item : any) =>{
        return item.scriptName.toLowerCase().includes(this.inputData.toLowerCase())
      })
    }else{
      this.searchResult = []
    }
  }

}
