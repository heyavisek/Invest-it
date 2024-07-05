import { Injectable } from '@angular/core';
import { indicesList } from '../../../shared/data/indices.data';
import { Indices } from '../../../shared/models/indices.model';

@Injectable({
  providedIn: 'root'
})
export class IndicesService {
  indicesList: Indices[] = indicesList

  getIndicesList() {
    return this.indicesList
  }

  getWeekData(indicesId: number){
    let randomArray : number[] = []
    if(indicesId == 2){ 
      for(let i = 0; i < 50; i++){
        randomArray.push(Math.floor(Math.random() * 1000))
      }
    }else if ( indicesId == 3){
      randomArray = [
        153.12, 155.67, 159.28, 162.94, 164.32,
        161.45, 158.76, 156.89, 154.23, 157.84,
        160.92, 163.47, 167.21, 169.54, 172.09,
        175.32, 178.45, 180.76, 182.98, 185.23,
        183.67, 181.89, 179.45, 177.32, 175.64,
        172.87, 170.23, 168.45, 165.78, 162.34,
        160.56, 157.89, 155.32, 153.67, 151.98,
        149.32, 147.64, 145.78, 143.89, 141.45,
        139.78, 137.89, 135.67, 133.45, 131.76,
        129.98, 127.45, 125.67, 123.89, 121.54
      ]
    }else if(indicesId == 4){
      randomArray = [
        100, 105, 98, 110, 102,
        108, 115, 112, 118, 120,
        116, 122, 124, 118, 126,
        130, 128, 132, 125, 135,
        130, 138, 142, 136, 145,
        140, 148, 152, 150, 158,
        154, 160, 165, 162, 168,
        170, 172, 168, 174, 178,
        176, 180, 182, 178, 185,
        188, 186, 192, 195, 200
      ]
    }
    return randomArray
  }
}
