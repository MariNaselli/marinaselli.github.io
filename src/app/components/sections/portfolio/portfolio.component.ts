import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './services/portfolio.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  detailsUrl: string;
  gallery: string;
}

@Component({
  selector: 'section-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  portfolioData: PortfolioItem[] = [];
  filteredPortfolio: PortfolioItem[] = [];
  filters: string[] = ['All', 'App', 'Product', 'Branding', 'Books'];
  currentFilter: string = 'All';


  constructor(private portfolioService: PortfolioService){}

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe((data) => {
      this.portfolioData = data;
      this.filteredPortfolio = data; // Mostrar todos los elementos por defecto
    });
  }

  // Aplicar filtro según la categoría
  setFilter(category: string): void {
    this.currentFilter = category;
    this.filteredPortfolio = category === 'All' ? this.portfolioData : this.portfolioData.filter(item => item.category === category);
  }

  onDetailsClick() {
    console.log('Navigating to Portfolio Details');
  }

}
