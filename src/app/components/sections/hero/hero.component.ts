import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { isPlatformBrowser } from '@angular/common';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'section-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit, OnInit {
  @ViewChild('typedElement') typedElement!: ElementRef;

  heroData: any; 

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener los datos
    this.heroService.getHeroData().subscribe((data) => {
      this.heroData = data.hero;
      this.initializeTyped(); // Mover la inicialización del typed aquí
    });
  }

  ngAfterViewInit() {
    // Mover la lógica de Typed a un método separado
  }

  initializeTyped() {
    if (isPlatformBrowser(this.platformId) && this.typedElement) {
      const typedStrings = this.heroData.typedItems; // Obtener directamente del mock
      const options = {
        strings: typedStrings.split(','),
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      };

      new Typed(this.typedElement.nativeElement, options);
    }
  }
}
