import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuBoxComponent } from '../menu-box/menu-box.component';

@Component({
  selector: 'app-side-section',
  standalone: true,
  imports: [RouterModule,CommonModule, MenuBoxComponent, CurrencyPipe],
  templateUrl: './side-section.component.html',
  styleUrl: './side-section.component.scss'
})
export class SideSectionComponent {
  balance : number = 51000;
  menuExpanded : Map<string, boolean> = new Map()
  isSidebarExpanded : boolean = true

  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  sideContainerList: any = [
    {
        name: 'Home',
        icon: 'images/home.svg',
        content: [
            {
                name: 'Dashboard',
                link: 'dashboard'
            },
            {
                name: 'Screener',
                link: 'screener'
            },
        ]
    },
    {
        name : 'Watchlist',
        icon : 'images/home.svg'
    },
    {
        name: 'Portfolio',
        icon: 'images/portfolio.svg',
        content: [
            {
                name: 'Portfolio 1',
                link: '/portfolio'
            },
            {
                name: 'Portfolio 2',
                link: '/'
            },
        ]
    },
    {
        name: 'Mutual Funds',
        icon: 'images/order.svg',
        content: [
            {
                name: 'Fund 1',
                link: '/'
            },
            {
                name: 'Fund 2',
                link: '/'
            },
        ]
    },
    {
        name: 'Orders',
        icon: 'images/order.svg',
        link: '/',
    },
    {
        name: 'Basket Order',
        icon: 'images/basket-order.svg',
        link: '/',
    },
    {
        name: 'Research Report',
        icon: 'images/research-report.svg',
        link: '/',
    }
  ]

  supportMenuList = [
    {
        name: 'Settings',
        icon: 'images/settings.svg',
        link: 'settings',
    },
    {
        name: 'FAQs',
        icon: 'images/faqs.svg',
        link: 'faqs',
    }
  ]

  setMenuExpanded(key : string) {
    this.menuExpanded.set(key, !this.menuExpanded.get(key))
  }

  setSideSectionExpanded(){
    this.isSidebarExpanded = !this.isSidebarExpanded

  }

}
