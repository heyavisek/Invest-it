import { Routes } from '@angular/router';
import path from 'path';
import { MainSectionComponent } from './layouts/main-section/main-section.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { IndicesViewSectionComponent } from './layouts/indices-view-section/indices-view-section.component';
import { PortfolioComponent } from './layouts/portfolio-section/portfolio-section.component';

export const routes: Routes = [
    {path : '', redirectTo : 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component : MainSectionComponent},
    {path: 'screener', component: FooterComponent},
    {path: 'all-indices', component: IndicesViewSectionComponent},
    {path: 'portfolio', component: PortfolioComponent}
];