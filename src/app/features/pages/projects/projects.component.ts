import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      image: './assets/portfolio/holidaze.jpg',
      title: 'Holidaze Bergen',
      subtitle: 'Skoleprosjekt',
      description: 'Eksamenssprosjekt fra Noroff',
      icons: ['path/to/icon1.png', 'path/to/icon2.png', 'path/to/icon3.png'],
      link: 'https://holidaze-bergen-project-2.netlify.app/',
    },
    {
      image: './assets/portfolio/intellitech.jpg',
      title: 'Intellitech',
      subtitle: 'Nettside',
      description: 'Nettside for selskapet Intellitech og deres tjenester',
      icons: ['path/to/icon1.png', 'path/to/icon2.png', 'path/to/icon3.png'],
      link: '#',
    },
    {
      image: './assets/portfolio/wtclogo.png',
      title: 'WaterCircles Forsikring',
      subtitle: 'Min Side',
      description: 'Description for project 3.',
      icons: ['path/to/icon1.png', 'path/to/icon2.png', 'path/to/icon3.png'],
      link: '#',
    },
    {
      image: './assets/portfolio/if-prototype.jpg',
      title: 'IF - Landingsside for App',
      subtitle: 'Potensiell landingsside for egne tjenester',
      description: 'Description for project 4.',
      icons: ['path/to/icon1.png', 'path/to/icon2.png', 'path/to/icon3.png'],
      link: '#',
    },
    {
      image: './assets/portfolio/kitchen.jpg',
      title: 'Project 4',
      subtitle: 'Subtitle 4',
      description: 'Description for project 4.',
      icons: ['path/to/icon1.png', 'path/to/icon2.png', 'path/to/icon3.png'],
      link: '#',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
