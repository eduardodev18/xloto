import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ModalVideoComponent } from '../modal-video/modal-video.component';
import { PromocaoService } from 'src/app/domains/services/promocao/promocao.service';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit {
  instagramValue = 'https://xloto.com.br/servico-dois'
  endTime = '2022-04-02T00:00:00';
  dataPromocao;
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
      url: 'https://www.xloto.com.br/diversos_xloto/depoimentos/Depoimento%20Rodrigo.mp4',
      foto: '/assets/img/rodrigo.png'
    },
    {
      id: 2,
      name: 'Zélia Maria',
      loterica: 'Lotérica Goianésia - GO',
      url: 'https://www.xloto.com.br/diversos_xloto/depoimentos/Depoimento%20Zelia.mp4',
      foto: '/assets/img/zelia.png'
    },
    {
      id: 3,
      name: 'Sergio Saraiva',
      loterica: 'Loteria Posto da Sorte - BA',
      url: 'https://www.xloto.com.br/diversos_xloto/depoimentos/Depoimento%20Sergio.mp4',
      foto: '/assets/img/sergiopng.png'
    },
    {
      id: 4,
      name: 'Catharina Gonçalves',
      loterica: ' Lotérica JC - RJ',
      url: 'https://www.xloto.com.br/diversos_xloto/depoimentos/Depoimento%20Catharina.mp4',
      foto: '/assets/img/catarina.png'
    },
  ]
  constructor(public dialog: MatDialog, private promocaoService: PromocaoService) { }

  ngOnInit(): void {
    this.buscarTitulo();
  }

  openDialog(item) {
    this.dialog.open(ModalVideoComponent, {
      data: item
    });
  }

  buscarTitulo() {
    this.promocaoService.buscarPromocaoDataTitulo().subscribe((res) => {
      this.dataPromocao = res[res.length - 1].value;
      this.endTime = this.dataPromocao.data
    })
  }

  copyInstagram() {
    window.alert('Link copiado')
  }

  fb(e) {
    let url = 'https://xloto.com.br/servico-dois';
    e.preventDefault();
    var facebookWindow = window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      'facebook-popup',
      'height=350,width=600'
    );
    if (facebookWindow.focus) {
      facebookWindow.focus();
    }
    return false;
  }
}
