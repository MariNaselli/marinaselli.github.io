import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-portfolio-details',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './project-details.component.html',
})
export class ProjectDetailsComponent implements OnInit {
  project: Project = new Project(); // Cambiamos el tipo a Project o undefined

  constructor(
    private viewportScroller: ViewportScroller,
    private portfolioDetailService: ProjectService, // Servicio con el método actualizado
    private route: ActivatedRoute // Para obtener el ID de la URL
  ) {}

  ngOnInit(): void {
    // Obtener el parámetro 'id' de la URL (project_name)
    const projectName = this.route.snapshot.paramMap.get('project_name'); // Usamos 'project_name' como parámetro de la URL

    if (projectName) {
      // Llamar al servicio para obtener los detalles del proyecto
      this.portfolioDetailService
        .getProjectDetails(projectName)
        .subscribe((data) => {
          this.project = data; // Asignamos el proyecto encontrado a la variable detailsData
        });
    }

    // Hacer scroll al inicio de la página
    setTimeout(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    }, 200);
  }

  getTechnologyBadges(technologies: string[]): string[] {
    return technologies.map(tech => tech); // Aquí estamos solo retornando el nombre de la tecnología para usar en el HTML
  }
}
