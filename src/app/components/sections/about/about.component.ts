import { Component, OnInit } from '@angular/core';
import { AboutService } from './services/about.service'; // Importar el servicio
import { CommonModule } from '@angular/common';

@Component({
  selector: 'section-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  aboutData: any; // Variable para almacenar los datos

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener los datos
    this.aboutService.getAboutData().subscribe((data) => {
      this.aboutData = data.about;
    });
  }
}
