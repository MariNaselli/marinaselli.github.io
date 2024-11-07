import { Component } from '@angular/core';
import { HeroComponent } from '../../components/sections/hero/hero.component';
import { AboutComponent } from '../../components/sections/about/about.component';
import { ResumeComponent } from '../../components/sections/resume/resume.component';
import { ServicesComponent } from '../../components/sections/services/services.component';
import { StatsComponent } from '../../components/sections/stats/stats.component';
import { ProjectListComponent } from '../../components/sections/projects/components/project-list/project-list.component';
import { PricingComponent } from '../../components/sections/pricing/pricing.component';
import { FaqComponent } from '../../components/sections/faq/faq.component';
import { TestimonialsComponent } from '../../components/sections/testimonials/testimonials.component';
import { ContactComponent } from '../../components/sections/contact/contact.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'layout-main',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ResumeComponent,
    ServicesComponent,
    StatsComponent,
    ProjectListComponent,
    PricingComponent,
    FaqComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    // Hacer scroll al inicio de la página
    setTimeout(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    }, 200);
  }
}
