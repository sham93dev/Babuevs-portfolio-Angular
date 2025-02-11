import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBullhorn,
  faCode,
  faPaintBrush,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  faBullhorn = faBullhorn;
  faCode = faCode;
  faPaintBrush = faPaintBrush;
  faLightbulb = faLightbulb;

  constructor() {}

  ngOnInit(): void {
    this.observeTitleAnimation();
  }

  private observeTitleAnimation(): void {
    const title = document.getElementById('animated-title');

    if (title) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              title.classList.add('visible');
              observer.unobserve(title);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(title);
    }
  }
}
