import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import Typed from 'typed.js';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'section-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('typedElement') typedElement!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const typedStrings = this.typedElement.nativeElement.getAttribute('data-typed-items');
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
