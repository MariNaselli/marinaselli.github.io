import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'layout-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  menuOpen = false;
  
  constructor() {}

  scrollToSection(sectionId: string): void {
    const offset = 100; // Ajusta el valor según el tamaño de tu header
    const element = document.getElementById(sectionId);

    if (element) {
      const yPosition =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  }

  toggleBodyClass() {
    // Verifica si el body tiene la clase `mobile-nav-active` y la alterna
    document.body.classList.toggle('mobile-nav-active');

    this.menuOpen = !this.menuOpen;
  }
}
