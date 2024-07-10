import { CommonModule } from '@angular/common';
import { Component, Input, input, OnChanges, SimpleChanges } from '@angular/core';
import { MenuLink } from '../../models/munu.link.model';
import { RouterModule } from '@angular/router';
import { HideAnimation } from '../../../animations/hide';

@Component({
  selector: 'app-menu-box',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-box.component.html',
  styleUrl: './menu-box.component.scss',
  animations: [HideAnimation]
})
export class MenuBoxComponent implements OnChanges{
  @Input() menuItem : MenuLink = new MenuLink
  @Input() isSidebarExpanded : boolean= false

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["isSidebarExpanded"]){
      this.menuExpanded.clear()
    }
  }
  
  menuExpanded : Map<string, boolean> = new Map()
  
  changeMenuExpanded(key : string) {
    this.menuExpanded.set(key, !this.menuExpanded.get(key))
  }


}
