import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js/auto'
import { IndicesService } from '../main-section/services/indices.service';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent implements OnInit {
  public chart: any;
  indicesData : number[] = []
  constructor(private indicesService : IndicesService){}

  ngOnInit() : void{
    this.indicesData = this.indicesService.getWeekData(3)
    
    this.createChart()
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.indicesData, 
	       datasets: [
          {
            label:'',
            data: this.indicesData,
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth : 1,
            borderCapStyle : 'square'
          }, 
        ]
      },
      options: {
        aspectRatio:1.2,
        scales:{
          x: { display : false},
          y: { display : false}
        },
        plugins: {
          legend: {
            display : false
          },
          tooltip : {
            enabled: false
          },
        },
        elements:{
          point : {
            radius : 0
          }
        }
        
      }
      
    });
  }

}
