import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndicesService } from '../../shared/services/indices.service';
import { TopMoversComponent } from './components/top-movers/top-movers.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IndicesBoxComponent } from './components/indices-box/indices-box.component';
import { CurrencyCommodityComponent } from "./components/currency-commodity/currency-commodity.component";

@Component({
  selector: 'app-dashboard-section',
  standalone: true,
  imports: [CommonModule, RouterModule, IndicesBoxComponent, TopMoversComponent, PortfolioComponent, CurrencyCommodityComponent],
  templateUrl: './dashboard-section.component.html',
  styleUrl: './dashboard-section.component.scss'
})

export class DashBoardSectionComponent {
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
