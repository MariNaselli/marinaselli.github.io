import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-details',
  standalone: true,
  templateUrl: './portfolio-details.component.html',
  styleUrl: './portfolio-details.component.css',
})
export class PortfolioDetailsComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.scrollToSection('portfolio-details');
  }

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
