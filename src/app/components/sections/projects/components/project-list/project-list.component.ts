import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'section-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  
})
export class ProjectListComponent implements OnInit {
  projectsList: Project[] = [];
  filteredProject: Project[] = [];
  filters: string[] = [];
  currentFilter: string = 'Todos';

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projectsList) => {
      this.projectsList = projectsList;

      // Obtener categorías únicas
      this.filters = this.projectService.getUniqueTechnologies(projectsList);

      // Mostrar todos los elementos por defecto
      this.filteredProject = projectsList;
    });
  }

  // Aplicar filtro según la tecnologia
  setFilter(technology: string): void {
    this.currentFilter = technology;

    if (technology === 'Todos') {
      this.filteredProject = this.projectsList; // Muestra todos los proyectos si la opción es 'All'
    } else {
      this.filteredProject = this.projectsList.filter(
        (item) => item.technologies.includes(technology) // Filtra por tecnología presente en el array
      );
    }
  }

  onDetailsClick(project: Project): void {
    this.router.navigate([`/project/${project.project_name}`]);
  }
}
