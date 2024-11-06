import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { ProjectDetailsComponent } from './components/sections/projects/components/project-detail/project-details.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'project/:project_name', component: ProjectDetailsComponent },
];
