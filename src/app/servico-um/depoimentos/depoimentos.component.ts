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
      name: 'Rodrigo',
      loterica: 'Shopping da Sorte - RJ',
      url: 'https://www.xloto.com.br/diversos_xloto/depoimentos/Depoimento%20Rodrigo.mp4'
    },
    {
      id: 2,
      name: 'Zélia Maria',
      loterica: 'Lotérica Goianésia - GO',
      url: 'https://www.xloto.com.br/diversos_xloto/depoimentos/Depoimento%20Zelia.mp4'
    },
    {
      id: 3,
      name: 'Sergio Saraiva',
      loterica: 'Loteria Posto da Sorte - BA',
      url: 'https://www.xloto.com.br/diversos_xloto/depoimentos/Depoimento%20Sergio.mp4'
    },
    {
      id: 4,
      name: 'Catharina Gonçalves',
      loterica: ' Lotérica JC - RJ',
      url: 'https://www.xloto.com.br/diversos_xloto/depoimentos/Depoimento%20Catharina.mp4'
    },
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(item) {
    this.dialog.open(ModalVideoComponent, {
      data: item
    });
  }
}
