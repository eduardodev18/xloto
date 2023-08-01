import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ModalVideoComponent } from '../modal-video/modal-video.component';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
        dots: true
      },
      400: {
        items: 1,
        dots: true
      },
      740: {
        items: 1,
        dots: true
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  slidesStore = [
    {
      id: 1,
      name: 'Armênia Oliveira',
      loterica: 'Lotérica Encontro '
    },
    {
      id: 2,
      name: 'Armênia Oliveira',
      loterica: 'Lotérica Encontro '
    },
    {
      id: 3,
      name: 'Armênia Oliveira',
      loterica: 'Lotérica Encontro '
    },
    {
      id: 4,
      name: 'Armênia Oliveira',
      loterica: 'Lotérica Encontro '
    },
    {
      id: 5,
      name: 'Armênia Oliveira',
      loterica: 'Lotérica Encontro '
    },
    {
      id: 6,
      name: 'Armênia Oliveira',
      loterica: 'Lotérica Encontro '
    }
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ModalVideoComponent);
  }
}
