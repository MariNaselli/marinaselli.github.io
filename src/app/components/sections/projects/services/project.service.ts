import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private mockData = 'assets/mocks/projects.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.mockData);
  }

  // Método para obtener tecnologías únicas de todos los proyectos
  getUniqueTechnologies(projects: Project[]): string[] {
    const allTechnologies = projects.flatMap((project) => project.technologies);
    const uniqueTechnologies = Array.from(new Set(allTechnologies)); // El Set garantiza tecnologías únicas

    // Agregamos "All" al principio de la lista
    return ['All', ...uniqueTechnologies];
  }

  // Método para obtener los detalles de un proyecto por project_name
  getProjectDetails(project_name: string): Observable<Project> {
    return this.http.get<Project[]>(this.mockData).pipe(
      map((projects) => projects.find((project) => project.project_name === project_name)),
      // Si no encontramos el proyecto, devolvemos un objeto vacío de tipo Project
      map((project) => 
        project || new Project() // Devolver un objeto vacío completo de tipo Project
      )
    );
  }
}
