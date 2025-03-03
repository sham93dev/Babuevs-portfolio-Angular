import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/core/app.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]),
  ],
}).catch((err) => console.error(err));
