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
  endTime  = '2022-04-02T00:00:00';
  instagramValue = 'https://xloto.com.br/gestao'
  compradores;

  constructor(public dialog: MatDialog, private gestaoService: GestaoService) { }

  ngOnInit(): void {
    this.buscarCompradores()
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
      
      if(resp.length) {
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
