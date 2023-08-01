import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {
  @Output() fecharMenu = new EventEmitter();

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  scrollToSection(section: string) {
    this.fecharMenu.emit({})
  }
}
