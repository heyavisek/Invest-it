import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuBoxComponent } from '../menu-box/menu-box.component';
import {
  sideMenuList,
  supportMenuList,
  logOutMenu,
} from '../../data/menu.data';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MenuLink } from '../../models/munu.link.model';
import { SideMenuSlideAnimation } from '../../../animations/sidemenu.slide';
import { HideAnimation } from '../../../animations/hide';

@Component({
  selector: 'app-side-section',
  standalone: true,
  imports: [RouterModule, CommonModule, MenuBoxComponent, CurrencyPipe],
  templateUrl: './side-section.component.html',
  styleUrl: './side-section.component.scss',
  animations: [HideAnimation, SideMenuSlideAnimation],
})
export class SideSectionComponent {
  sideContainerList: MenuLink[] = sideMenuList;
  supportMenuList: MenuLink[] = supportMenuList;
  logOutMenu: MenuLink = logOutMenu;
  balance: number = 51000;
  isSidebarExpanded: boolean = true;
  isAnimation : boolean = true;

  setSideSectionExpanded() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
    this.isAnimation = !this.isAnimation;
  }
}
