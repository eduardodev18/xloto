import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GestaoService } from 'src/app/domains/services/gestao/gestao.service';
import { ModalCompradoresComponent } from '../modal-compradores/modal-compradores.component';
import { ModalTermosComponent } from '../modal-termos/modal-termos.component';

@Component({
  selector: 'app-compra-coletiva',
  templateUrl: './compra-coletiva.component.html',
  styleUrls: ['./compra-coletiva.component.scss']
})
export class CompraColetivaComponent implements OnInit {
  endTime = '2022-04-02T00:00:00';
  instagramValue = 'https://xloto.com.br/gestao'
  compradores;

  indexArray = 0;

  arrayLinks = [
    {
      id: 1,
      preco: 'R$ 90,00',
      precoPromocao: 'R$ 67,50',
      link: 'https://www.asaas.com/c/045655535225'
    },
    {
      id: 2,
      preco: 'R$ 180,00',
      precoPromocao: 'R$ 150,00',
      link: 'https://www.asaas.com/c/321574272797'
    },
    {
      id: 3,
      preco: 'R$ 270,00',
      precoPromocao: 'R$ 202,50',
      link: 'https://www.asaas.com/c/285106623552'
    },
    {
      id: 4,
      preco: 'R$ 360,00',
      precoPromocao: 'R$ 270,00',
      link: 'https://www.asaas.com/c/273772393957'
    },
    {
      id: 5,
      preco: 'R$ 450,00',
      precoPromocao: 'R$ 330,00',
      link: 'https://www.asaas.com/c/313674947677'
    },
    {
      id: 6,
      preco: 'R$ 540,00',
      precoPromocao: 'R$ 450,00',
      link: 'https://www.asaas.com/c/306859864891'
    },
    {
      id: 7,
      preco: 'R$ 630,00',
      precoPromocao: 'R$ 517,50',
      link: 'https://www.asaas.com/c/373150815885'
    },
    {
      id: 8,
      preco: 'R$ 630,00',
      precoPromocao: 'R$ 517,50',
      link: 'https://www.asaas.com/c/373150815885'
    },
    {
      id: 9,
      preco: 'R$ 630,00',
      precoPromocao: 'R$ 517,50',
      link: 'https://www.asaas.com/c/373150815885'
    },
    {
      id: 10,
      preco: 'R$ 630,00',
      precoPromocao: 'R$ 517,50',
      link: 'https://www.asaas.com/c/373150815885'
    },
    {
      id: 11,
      preco: 'R$ 630,00',
      precoPromocao: 'R$ 517,50',
      link: 'https://www.asaas.com/c/373150815885'
    },
    {
      id: 12,
      preco: 'R$ 630,00',
      precoPromocao: 'R$ 517,50',
      link: 'https://www.asaas.com/c/373150815885'
    },
    {
      id: 13,
      preco: 'R$ 630,00',
      precoPromocao: 'R$ 517,50',
      link: 'https://www.asaas.com/c/373150815885'
    }
  ]

  terminalEscolhido = {
    id: 1,
    preco: 'R$ 90,00',
    precoPromocao: 'R$ 67,50',
    link: 'https://www.asaas.com/c/045655535225'
  }

  constructor(public dialog: MatDialog, private gestaoService: GestaoService) { }

  ngOnInit(): void {
    this.buscarCompradores()
  }

  comprar() {
    window.open(this.terminalEscolhido.link, '_blank');
  }

  increment() {
    if(this.indexArray === 12) return false;
    
    this.indexArray = this.indexArray + 1;

    this.terminalEscolhido = this.arrayLinks[this.indexArray];
  }

  decrement() {
    if(this.indexArray <= 0) return false;
    
    this.indexArray =  this.indexArray - 1;

    this.terminalEscolhido = this.arrayLinks[this.indexArray];
  }

  copyInstagram() {
    window.alert('Link copiado')
  }

  openModalTermos(): any {
    this.dialog.open(ModalTermosComponent);
  }

  openModalCompradores(): any {
    this.dialog.open(ModalCompradoresComponent);
  }

  getPercent() {
    let result = this.compradores.length * 10;
    return `${result}%`
  }

  buscarCompradores() {
    this.gestaoService.buscarCompradores().subscribe((resp) => {
      let array = [];

      if (resp.length) {
        resp.map((item) => {
          array.push(item.value);
        })
      }

      this.compradores = array;
    })
  }

  fb(e) {
    let url = 'https://xloto.com.br/gestao';
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
