import { Component } from '@angular/core';
import { HeroComponent } from '../../components/sections/hero/hero.component';
import { AboutComponent } from '../../components/sections/about/about.component';
import { ResumeComponent } from '../../components/sections/resume/resume.component';
import { ServicesComponent } from '../../components/sections/services/services.component';
import { StatsComponent } from '../../components/sections/stats/stats.component';
import { PortfolioComponent } from '../../components/sections/portfolio/portfolio.component';
import { PricingComponent } from '../../components/sections/pricing/pricing.component';
import { FaqComponent } from '../../components/sections/faq/faq.component';
import { TestimonialsComponent } from '../../components/sections/testimonials/testimonials.component';
import { ContactComponent } from '../../components/sections/contact/contact.component';

@Component({
  selector: 'layout-main',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ResumeComponent,
    ServicesComponent,
    StatsComponent,
    PortfolioComponent,
    PricingComponent,
    FaqComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}