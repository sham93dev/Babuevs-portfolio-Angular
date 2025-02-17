import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAngular,
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faJira,
  faFigma,
  faSass,
  faStripe,
  faAws,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule], // Importerer FontAwesomeModule
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      image: './assets/portfolio/holidaze.jpg',
      title: 'Holidaze Bergen',
      subtitle: 'Skoleprosjekt',
      description: 'Avsluttende eksamensprosjekt fra Noroff Frontend studier',
      icons: [
        { icon: faReact, color: '#119abf' },
        { icon: faSass, color: '#ac25d2' },
        { icon: faStripe, color: '#119abf' },
        { icon: faAws, color: 'black' },
      ],
      link: 'https://holidaze-bergen-project-2.netlify.app/',
    },
    {
      image: './assets/portfolio/intellitech.jpg',
      title: 'Intellitech',
      subtitle: 'Nettside',
      description: 'Nettside for tidligere arbeidsgiver Intellitech',
      icons: [
        { icon: faHtml5, color: '#E34F26' },
        { icon: faCss3Alt, color: '#1572B6' },
        { icon: faJs, color: '#F7DF1E' },
        { icon: faFigma, color: '#A359FC' },
        { icon: faJira, color: '#2481F6' },
      ],
      link: 'https://intellitech.no',
    },
    {
      image: './assets/portfolio/wtclogo.png',
      title: 'WaterCircles',
      subtitle: 'Min Side',
      description: 'Min side for selskapet WaterCircles Forsikring',
      icons: [
        { icon: faAngular, color: '#E34F26' },
        { icon: faNodeJs, color: '#1572B6' },
        { icon: faJira, color: '#2481F6' },
        { icon: faBootstrap, color: '#AC26D2' },
        { icon: faFigma, color: '#A359FC' },
      ],
      link: 'https://minesider.watercircles.no/',
    },
    {
      image: './assets/portfolio/if-prototype.jpg',
      title: 'IF - Landing for App',
      subtitle: 'Prototype',
      description: 'Potensiell landingsside for tjenestetilbud',
      icons: [
        { icon: faAngular, color: '#E34F26' },
        { icon: faJira, color: '#2481F6' },
        { icon: faBootstrap, color: '#AC26D2' },
        { icon: faFigma, color: '#A359FC' },
      ],
      link: '#',
    },
  ];

  chunkedProjects: any[][] = [];

  constructor() {}

  ngOnInit(): void {
    this.chunkProjectsBasedOnScreenSize();
    window.addEventListener('resize', () =>
      this.chunkProjectsBasedOnScreenSize()
    );
  }

  chunkProjectsBasedOnScreenSize(): void {
    const screenWidth = window.innerWidth;
    const chunkSize = screenWidth < 768 ? 1 : 4; // 1 kort per slide på mobil, 4 på desktop
    this.chunkedProjects = this.chunkArray(this.projects, chunkSize);
  }

  chunkArray(array: any[], chunkSize: number): any[][] {
    let results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }

    // Hvis siste gruppe har færre enn chunkSize, fyll den opp med tomme objekter for layoutens skyld
    while (results[results.length - 1].length < chunkSize) {
      results[results.length - 1].push({ empty: true });
    }

    return results;
  }
}
