import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { IndicesService } from '../../../main-section/services/indices.service';

@Component({
  selector: 'app-indices-large-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './indices-large-box.component.html',
  styleUrl: './indices-large-box.component.scss'
})
export class IndicesLargeBoxComponent implements AfterViewInit {

  constructor(private indicesService : IndicesService){}

  @Input() indicesName : string = ''
  @Input() changes : number = 0
  @Input() data : number = 0
  @Input() borderColor : string = 'red'
  dataSet : number[] = []
  chart : any;
  
  ngAfterViewInit(): void {
    this.createChart()
  }

  createChart(): void {
    this.dataSet = this.indicesService.getWeekData(3)
    this.chart = new Chart(this.indicesName, {
      type: 'line',
      data: {// values on X-Axis
        labels: this.dataSet, 
	       datasets: [
          {
            label:'',
            data: this.dataSet,
            backgroundColor: this.borderColor,
            borderColor: this.borderColor,
            borderWidth : 2,
          }, 
        ]
      },
      options: {
        aspectRatio: 2,
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
