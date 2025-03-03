import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from 'src/app/ui-components/icons.module';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, IconsModule], 
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
        { icon: 'react', color: '#119abf' },
        { icon: 'sass', color: '#ac25d2' },
        { icon: 'bootstrap', color: '#AC26D2' },
      ],
      link: 'https://holidaze-bergen-project-2.netlify.app/',
      onImprovement: true,
    },
    {
      image: './assets/portfolio/borz-jiujitsu.jpg',
      title: 'Zakriew Jiujitsu',
      subtitle: 'Kunnskapsplattform',
      description: 'Dedikert til folk med lidenskap for jiujitsu',
      icons: [
        { icon: 'figma', color: '#A359FC' },
        { icon: 'jira', color: '#2481F6' },
        { icon: 'sass', color: '#ac25d2' },
        { icon: 'angular', color: '#E34F26' },
      ],
      link: null,
      comingSoon: true,
    },
    {
      image: './assets/portfolio/intellitech.jpg',
      title: 'Intellitech',
      subtitle: 'Bedriftsside',
      description: 'Nettside for tidligere arbeidsgiver Intellitech',
      icons: [
        { icon: 'html5', color: '#E34F26' },
        { icon: 'css3-alt', color: '#1572B6' },
        { icon: 'js', color: '#F7DF1E' },
        { icon: 'figma', color: '#A359FC' },
        { icon: 'jira', color: '#2481F6' },
      ],
      link: 'https://intellitech.no',
    },
    {
      image: './assets/portfolio/proriv.jpg',
      title: 'Proriv AS',
      subtitle: 'Adobe XD Prototype',
      description: 'Potensiell bedriftsside for byggefirma i Oslo',
      icons: [
        { icon: 'figma', color: '#A359FC' },
        { icon: 'jira', color: '#2481F6' },
        { icon: 'angular', color: '#E34F26' },
      ],
      link: null,
      comingSoon: true,
    },
    {
      image: './assets/portfolio/wtclogo.png',
      title: 'WaterCircles',
      subtitle: 'Min Side - Applikasjon',
      description: 'Min side for selskapet WaterCircles Forsikring',
      icons: [
        { icon: 'angular', color: '#E34F26' },
        { icon: 'node-js', color: '#1572B6' },
        { icon: 'jira', color: '#2481F6' },
        { icon: 'bootstrap', color: '#AC26D2' },
        { icon: 'figma', color: '#A359FC' },
      ],
      link: 'https://minesider.watercircles.no/',
    },
    {
      image: './assets/portfolio/if-prototype.jpg',
      title: 'IF - Landing for App',
      subtitle: 'Landingsside',
      description: 'Potensiell landingsside for tjenestetilbud',
      icons: [
        { icon: 'angular', color: '#E34F26' },
        { icon: 'jira', color: '#2481F6' },
        { icon: 'bootstrap', color: '#AC26D2' },
        { icon: 'figma', color: '#A359FC' },
      ],
      link: '#',
    },
    {
      image: './assets/portfolio/lampe.jpg',
      title: 'Hazceno Interiør',
      subtitle: 'Nettbutikk',
      description: 'Nytt interiørdesign-konsept under utvikling',
      icons: [
        { icon: 'figma', color: '#A359FC' },
        { icon: 'react', color: '#119abf' },
        { icon: 'bootstrap', color: '#AC26D2' },
        { icon: 'sass', color: '#ac25d2' },
        { icon: 'stripe', color: '#119abf' },
      ],
      link: null,
      comingSoon: true,
    },
    {
      image: './assets/portfolio/gamlebyen.jpg',
      title: 'Gamlebyen',
      subtitle: 'Nettside for bydel',
      description: 'Moderne nettside for gamlebyen i Oslo',
      icons: [
        { icon: 'angular', color: '#E34F26' },
        { icon: 'stripe', color: '#119abf' },
        { icon: 'bootstrap', color: '#AC26D2' },
        { icon: 'sass', color: '#ac25d2' },
      ],
      link: null,
      comingSoon: true,
    },
    {
      image: './assets/portfolio/beautybees.jpg',
      title: 'Beautybees',
      subtitle: 'Bedriftsside',
      description: 'Skjønnhetsprodukter og tjenester på nett',
      icons: [
        { icon: 'react', color: '#119abf' },
        { icon: 'stripe', color: '#119abf' },
        { icon: 'stripe', color: '#119abf' },
        { icon: 'bootstrap', color: '#AC26D2' },
        { icon: 'sass', color: '#ac25d2' },
      ],
      link: null,
      comingSoon: true,
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
    const chunkSize = screenWidth < 768 ? 1 : 4;
    this.chunkedProjects = this.chunkArray(this.projects, chunkSize);
  }

  chunkArray(array: any[], chunkSize: number): any[][] {
    let results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }

    while (results[results.length - 1].length < chunkSize) {
      results[results.length - 1].push({ empty: true });
    }

    return results;
  }
}
