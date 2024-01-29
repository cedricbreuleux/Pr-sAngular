import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/Pages/App/app.config';
import { AppComponent } from './app/Pages/App/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
