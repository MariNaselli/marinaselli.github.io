import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { provideHttpClient, withFetch } from '@angular/common/http';

const bootstrap = () => bootstrapApplication(AppComponent, {
  ...config,
  providers: [
    ...config.providers || [],
    provideHttpClient(withFetch()) // Asegúrate de incluir el HttpClient aquí también
  ]
});

export default bootstrap;
