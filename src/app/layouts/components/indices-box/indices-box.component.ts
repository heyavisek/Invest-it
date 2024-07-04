import { CommonModule, CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { IndicesService } from '../../../core/service/indices.service';
import { CurrencyFormatPipe } from '../../../shared/pipes/currency-format.pipe';

@Component({
  selector: 'app-indices-box',
  standalone: true,
  imports: [CommonModule, CurrencyFormatPipe, CurrencyPipe],
  templateUrl: './indices-box.component.html',
  styleUrl: './indices-box.component.scss'
})
export class IndicesBoxComponent implements AfterViewInit {
  chart : any
  constructor(private indicesService : IndicesService){}

  @Input() indicesName : string = ''
  @Input() changes : number = 0
  @Input() data : number = 0
  borderColor : string = ''
  dataSet : number[] = []

  ngAfterViewInit(): void {
    this.createChart()
    
  }

  createChart(): void {
    const ctx = <HTMLCanvasElement> document.getElementById(this.indicesName)
    const context = ctx.getContext('2d')
    let redGradient = context?.createLinearGradient(0, 0, 0, 80)    
    redGradient?.addColorStop(0, 'rgba(255,3,0,0.3)');   
    redGradient?.addColorStop(1, 'rgba(255,255,255,0)')

    let greenGradient = context?.createLinearGradient(0, 0, 0, 80);
    
    greenGradient?.addColorStop(0, 'rgba(0,124,77,0.3)');   
    greenGradient?.addColorStop(1, 'rgba(255,255,255,0)')



    this.dataSet = this.indicesService.getWeekData(4)
    this.borderColor = this.changes > 0 ? '#009855' : '#F00000'
    this.chart = new Chart(this.indicesName, {
      type: 'line',
      data: {// values on X-Axis
        labels: this.dataSet, 
	       datasets: [
          {
            label:'',
            data: this.dataSet,
            borderColor: this.borderColor,
            borderWidth : 1.5,
            fill : true,
            backgroundColor: this.changes > 0 ? greenGradient : redGradient
          }, 
        ]
      },
      options: {
        aspectRatio: 1.4,
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
    })
  }

}
