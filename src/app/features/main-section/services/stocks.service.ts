import { Injectable } from '@angular/core';
import { topMovers, topGainers, topLosers } from '../../../shared/data/stocks.data';
import { Stocks } from '../../../shared/models/stocks.model';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  topMovers: Stocks[] = topMovers
  topGainers: Stocks[] = topGainers
  topLosers: Stocks[] = topLosers

  getAllStocksList(){
    this.topMovers.sort((a : any, b : any) =>{
      if (a.percentageChange < b.percentageChange) {
        return 1; 
      }
      if (a.percentageChange > b.percentageChange) {
        return -1;
      }
      return 0;

    })
    return this.topMovers
  }

  getTopGainers(){
    this.topGainers.sort((a : any, b : any) =>{
      if (a.percentageChange < b.percentageChange) {
        return 1; 
      }
      if (a.percentageChange > b.percentageChange) {
        return -1;
      }
      return 0;

    })
    return this.topGainers
  }

  getTopLosers(){
    this.topLosers.sort((a : any, b : any) =>{
      if (a.percentageChange < b.percentageChange) {
        return -1; 
      }
      if (a.percentageChange > b.percentageChange) {
        return 1;
      }
      return 0;

    })
    return this.topLosers
  }


}
