import { Injectable } from '@angular/core';
import { topMovers, topGainers, topLosers } from '../data/stocks.data';
import { Stocks } from '../models/stocks.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { KeyedWrite } from '@angular/compiler';
import { environment } from '../../../environments/environment';

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

  getTopMoversListStocks(): Observable<any> {
    return this.http.get(`${environment.baseUrl}${environment.topMoversListURL}&${environment.apiKey}`)
  }

  searchStocksList(keyword: string): Observable<any>{
    keyword = 'tencent'
    return this.http.get(`${environment.baseUrl}${environment.searchStockURL}&keywords=${keyword}&${environment.apiKey}`)
  }
}
