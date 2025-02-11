import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  downloadCV() {
    window.open(
      'https://www.dropbox.com/scl/fi/s87x35ikrb2o7tg3ml0kj/Shamil-B_CV-1.pdf?rlkey=xi0anogxy6pk9n2xlh2uw312a&st=sm55wgwy&dl=0',
      '_blank'
    );
  }

  sendEmail() {
    window.open('mailto:shamil_b93@hotmail.com', '_blank');
  }

  constructor() {}

  ngOnInit(): void {}
}
