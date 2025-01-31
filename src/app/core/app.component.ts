import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IntroductionComponent } from '../features/pages/introduction/introduction.component';
import { ProjectsComponent } from '../features/pages/projects/projects.component';
import { EducationComponent } from '../features/pages/education/education.component';
import { ServicesComponent } from '../features/pages/services/services.component';
import { NavbarComponent } from '../ui-components/navbar/navbar.component';
import { ClientsComponent } from '../features/pages/clients/clients.component';
import { FooterComponent } from '../ui-components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IntroductionComponent,
    EducationComponent,
    ProjectsComponent,
    NavbarComponent,
    ClientsComponent,
    ServicesComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'babuevs-portfolio';
}
