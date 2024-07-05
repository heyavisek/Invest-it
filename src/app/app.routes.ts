import { Routes } from '@angular/router';
import path from 'path';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MainSectionComponent } from './features/main-section/main-section.component';
import { IndicesViewSectionComponent } from './features/indices-view-section/indices-view-section.component'
import { PortfolioSectionComponent } from './features/portfolio-section/portfolio-section.component';

export const routes: Routes = [
    {path : '', redirectTo : 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component : MainSectionComponent},
    {path: 'screener', component: FooterComponent},
    {path: 'all-indices', component: IndicesViewSectionComponent},
    {path: 'portfolio', component: PortfolioSectionComponent}
];