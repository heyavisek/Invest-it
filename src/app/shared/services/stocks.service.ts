import { Injectable } from '@angular/core';
import { topMovers, topGainers, topLosers } from '../data/stocks.data';
import { Stocks } from '../models/stocks.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { KeyedWrite } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  constructor(private http: HttpClient){}

  topMovers: Stocks[] = topMovers
  topGainers: Stocks[] = topGainers
  topLosers: Stocks[] = []

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

  getTopMovers(): Observable<any> {
    const fetchedData = this.http.get('https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo')
    // this.topLosers.sort((a : any, b : any) =>{
    //   if (a.percentageChange < b.percentageChange) {
    //     return -1; 
    //   }
    //   if (a.percentageChange > b.percentageChange) {
    //     return 1;
    //   }
    //   return 0;

    // })
    return fetchedData
  }

  searchStocksList(keyword: string): Observable<any>{
    return this.http.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=TPVWBZ1N5GP04H5G`)
    // return this.http.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo`)
  }

  getStockData(): Observable<any>{
    const data = this.http.get('https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo')
    return data
  }
}
