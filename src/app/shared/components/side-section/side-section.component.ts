import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuBoxComponent } from '../menu-box/menu-box.component';
import { sideMenuList, supportMenuList } from '../../data/menu.data';

@Component({
  selector: 'app-side-section',
  standalone: true,
  imports: [RouterModule,CommonModule, MenuBoxComponent, CurrencyPipe],
  templateUrl: './side-section.component.html',
  styleUrl: './side-section.component.scss'
})
export class SideSectionComponent {
  sideContainerList = sideMenuList
  supportMenuList = supportMenuList
  balance : number = 51000;
  menuExpanded : Map<string, boolean> = new Map()
  isSidebarExpanded : boolean = true

  changeMenuExpanded(key : string) {
    this.menuExpanded.set(key, !this.menuExpanded.get(key))
  }

  setSideSectionExpanded(){
    this.menuExpanded.clear()
    this.isSidebarExpanded = !this.isSidebarExpanded

  }

}
