import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'layout-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
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
}
