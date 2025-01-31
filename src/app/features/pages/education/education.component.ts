import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  sectionTitle: string = 'Utdanning';
  educationList = [
    {
      logo: '../../../../assets/img/education/galogo.png',
      altText: 'gokstad akademiet logo',
      schoolName: 'Gokstad Akademiet',
      program: 'Backend-utvikling',
      duration: '07.21 - Nåværende',
    },
    {
      logo: '../../../../assets/img/education/logonoroff.png',
      altText: 'Noroff logo',
      schoolName: 'Noroff',
      program: 'Frontend-utvikling',
      duration: '08.2019 - 06.2021',
      logoStyle: { padding: '43px' },
    },
    {
      logo: '../../../../assets/img/education/bilogo.png',
      altText: 'Bi logo',
      schoolName: 'Handelshøyskolen BI',
      program: 'Markedsføringsledelse',
      duration: '08.2013 - 05.2017',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
