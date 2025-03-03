import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeService } from 'src/app/dark-mode.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isDarkMode: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Sjekker om bruker har valgt dark mode tidligere
    const savedTheme = localStorage.getItem('darkMode');
    this.isDarkMode = savedTheme ? JSON.parse(savedTheme) : false; // Default er Light Mode (false)

    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);

    // Lagre brukerens valg i localStorage
    localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
  }
}
