import { Routes } from '@angular/router';
import { PortfolioDetailsComponent } from './components/sections/portfolio-details/portfolio-details.component';
import { MainComponent } from './layout/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'portfolio-details', component: PortfolioDetailsComponent },
];
