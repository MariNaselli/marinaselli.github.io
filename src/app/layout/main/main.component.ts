import { Component } from '@angular/core';
import { HeroComponent } from "../../sections/hero/hero.component";
import { AboutComponent } from "../../sections/about/about.component";
import { ResumeComponent } from "../../sections/resume/resume.component";
import { ServicesComponent } from "../../sections/services/services.component";
import { StatsComponent } from "../../sections/stats/stats.component";
import { PortfolioComponent } from "../../sections/portfolio/portfolio.component";
import { PricingComponent } from "../../sections/pricing/pricing.component";
import { FaqComponent } from "../../sections/faq/faq.component";
import { TestimonialsComponent } from "../../sections/testimonials/testimonials.component";
import { ContactComponent } from "../../sections/contact/contact.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeroComponent, AboutComponent, ResumeComponent, ServicesComponent, StatsComponent, PortfolioComponent, PricingComponent, FaqComponent, TestimonialsComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
