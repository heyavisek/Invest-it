import { Component } from '@angular/core';
import { IndicesService } from '../main-section/services/indices.service';
import { CommonModule } from '@angular/common';
import { IndicesLargeBoxComponent } from './components/indices-large-box/indices-large-box.component';


@Component({
  selector: 'app-indices-view-section',
  standalone: true,
  imports: [CommonModule, IndicesLargeBoxComponent],
  templateUrl: './indices-view-section.component.html',
  styleUrl: './indices-view-section.component.scss'
})
export class IndicesViewSectionComponent {
  indicesAllData : any = this.indicesService.getIndicesList()

  constructor(private indicesService: IndicesService){}

  

}
