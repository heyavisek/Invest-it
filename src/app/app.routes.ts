import { Routes } from '@angular/router';
import path from 'path';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DashBoardSectionComponent } from './features/dashboard-section/dashboard-section.component';
import { IndicesViewSectionComponent } from './features/indices-view-section/indices-view-section.component'
import { PortfolioSectionComponent } from './features/portfolio-section/portfolio-section.component';
import { WatchlistsSectioinComponent } from './features/watchlists-sectioin/watchlists-sectioin.component';

export const routes: Routes = [
    {path : '', redirectTo : 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component : DashBoardSectionComponent},
    {path: 'screener', component: FooterComponent},
    {path: 'all-indices', component: IndicesViewSectionComponent},
    {path: 'portfolio', component: PortfolioSectionComponent},
    {path: 'watchlists', component: WatchlistsSectioinComponent}
];