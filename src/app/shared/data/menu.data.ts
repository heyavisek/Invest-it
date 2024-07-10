import { MenuLink } from "../models/munu.link.model"

export const sideMenuList: MenuLink[] = [
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

export const supportMenuList: MenuLink[] = [
  {
      name: 'Settings',
      icon: 'images/settings.svg',
      link: 'settings'
  },
  {
      name: 'FAQs',
      icon: 'images/faqs.svg',
      link: 'faqs',
  }
]

export const logOutMenu: MenuLink={
    name: "Logout",
    icon: 'images/logout.svg',
    link: 'logout'
}