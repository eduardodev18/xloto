import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuToggle = false;
  isFixed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isFixed = window.pageYOffset > 100; // Define a altura em que o menu será fixado

    console.log(this.isFixed, 'fixed')
  }

  toggleMenu() {
    this.menuToggle = !this.menuToggle;
  }

}
