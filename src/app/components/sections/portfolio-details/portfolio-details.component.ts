import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { PortfolioDetailsService } from './services/portfolio-details.service';

@Component({
  selector: 'app-portfolio-details',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './portfolio-details.component.html',
  styleUrl: './portfolio-details.component.css',
})
export class PortfolioDetailsComponent implements OnInit {
  detailsData: any;

  constructor(
    private viewportScroller: ViewportScroller,
    private portfolioDetailService: PortfolioDetailsService
  ) {}

  ngOnInit(): void {
    this.portfolioDetailService.getDetailsData().subscribe((data) => {
      this.detailsData = data;
    });
    this.scrollToSection('portfolio-details');
  }

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
