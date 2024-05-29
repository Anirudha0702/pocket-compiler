import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  theme: string;
  isHamburgerClicked: boolean;

  @Output() showFileStructure = new EventEmitter<boolean>();

  constructor() {
    this.theme = localStorage.getItem('theme') || 'dark';
    document.querySelector('html')?.setAttribute('data-theme', this.theme);
    this.isHamburgerClicked = false;
  }
  changeTheme() {
    console.log(this.theme);
    this.theme = this.theme === 'dark' ? 'cupcake' : 'dark';
    localStorage.setItem('theme', this.theme);
    document.querySelector('html')?.setAttribute('data-theme', this.theme);
  }
  hamburgerClicked() {
    this.isHamburgerClicked = !this.isHamburgerClicked;
    this.showFileStructure.emit(this.isHamburgerClicked);
  }
}
