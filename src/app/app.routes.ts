import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { ProjectDetailsComponent } from './components/sections/projects/components/project-detail/project-details.component';
import { AboutComponent } from './components/sections/about/about.component';
import { ProjectListComponent } from './components/sections/projects/components/project-list/project-list.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { HeroComponent } from './components/sections/hero/hero.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project/:project_name', component: ProjectDetailsComponent },
];
