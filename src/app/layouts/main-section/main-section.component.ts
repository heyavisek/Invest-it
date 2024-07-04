import { Component } from '@angular/core';
import { IndicesBoxComponent } from '../components/indices-box/indices-box.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopMoversComponent } from '../features/top-movers/top-movers.component';
import { PortfolioComponent } from '../features/portfolio/portfolio.component';
import { IndicesService } from '../../core/service/indices.service';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [CommonModule, RouterModule, IndicesBoxComponent, TopMoversComponent, PortfolioComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {
  
  indicesList : any = this.indicesService.getIndicesList()

  constructor (private indicesService: IndicesService){}

  onIndicesScroll(direction : number){
    const indicesContent = document.getElementById('indices-container')
    
    indicesContent?.scrollBy({
      behavior : 'smooth',
      left : 300 * direction
    })
  }
}
