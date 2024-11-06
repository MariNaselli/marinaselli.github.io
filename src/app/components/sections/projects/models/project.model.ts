export class Project {
  project_name: string = '';
  title: string = '';
  technologies: string[] = [];
  description_short: string = '';
  description_long: string = '';
  client: string = '';
  date: string = '';
  url: string = '';
  carrousel_images: string[] = [];

  constructor() {
    // Las propiedades se inicializan con valores predeterminados.
  }

  // Métodos adicionales si los necesitas
  getShortDescription(): string {
    return this.description_short;
  }
}
