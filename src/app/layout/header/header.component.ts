import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'layout-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(sectionId: string): void {
    // Ajuste de desplazamiento adicional solo para "portfolio" y "about"
    if (sectionId === 'portfolio' || sectionId === 'about') {
      const offset = 100; // Ajusta el valor según el tamaño de tu header
      const element = document.getElementById(sectionId);
      
      if (element) {
        const yPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }
    } else {
      // Desplazamiento normal para las demás secciones
      this.viewportScroller.scrollToAnchor(sectionId);
    }
  }
}
