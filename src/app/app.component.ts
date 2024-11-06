import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LoaderComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  isLoading: boolean = true;

  title = 'portfolio_angular';

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    // Suscribirse a la visibilidad del loader
    this.loaderService.loaderVisible$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });

    // Simular un tiempo de carga para ocultar el loader
    this.loaderService.showLoader();
    setTimeout(() => {
      this.loaderService.hideLoader();
    }, 1500);
  }
}
