import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor() { }

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

  topMovers : any = [
    {
      scriptName : "HDFCLIFE",
      percentageChange : -4.4,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "RELIANCE",
      percentageChange : 4.4,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "ICICIBANK",
      percentageChange : 8.3,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "SBIN",
      percentageChange : -2.6,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "INFOSYS",
      percentageChange : -4.4,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "WIPRO",
      percentageChange : 4.4,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "JBMAUTO",
      percentageChange : 4.4,
      pointChange : +20,
      currentPrice : 480.3
    },

  ]

  topGainers : any = [
    {
      scriptName : "HDFCLIFE",
      percentageChange : 4.4,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "RELIANCE",
      percentageChange : 4.4,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "ICICIBANK",
      percentageChange : 8.3,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "SBIN",
      percentageChange : 2.6,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "INFOSYS",
      percentageChange : 4.4,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "WIPRO",
      percentageChange : 4.4,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "JBMAUTO",
      percentageChange : 4.4,
      pointChange : +20,
      currentPrice : 480.3
    },

  ]

  topLosers : any = [
    {
      scriptName : "HDFCLIFE",
      percentageChange : -4.4,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "RELIANCE",
      percentageChange : -4.4,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "ICICIBANK",
      percentageChange : -8.3,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "SBIN",
      percentageChange : -2.6,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "INFOSYS",
      percentageChange : -4.4,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "WIPRO",
      percentageChange : -4.4,
      pointChange : +20,
      currentPrice : 480.3
    },
    {
      scriptName : "JBMAUTO",
      percentageChange : -4.4,
      pointChange : +20,
      currentPrice : 480.3
    },

  ]

}
