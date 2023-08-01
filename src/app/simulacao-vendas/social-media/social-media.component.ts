import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VendasService } from 'src/app/domains/services/vendas/vendas.service';
import { ModalCompradoresComponent } from 'src/app/vendas/modal-compradores/modal-compradores.component';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  instagramValue = 'https://xloto.com.br/vendas';
  compradores;

  constructor(public dialog: MatDialog, private vendasSerive: VendasService) { }

  ngOnInit(): void {
    this.buscarCompradores();
  }

  copyInstagram() {
    window.alert('Link copiado')
  }

  buscarCompradores() {
    this.vendasSerive.buscarCompradores().subscribe((resp) => {
      let array = [];
      
      if(resp.length) {
        resp.map((item) => {
          array.push(item.value);
        })
      }
      
      this.compradores = array;
    })
  }

  getPercent() {
    let result = this.compradores.length * 10;
    return `${result}%`
  }


  openModalCompradores(): any {
    this.dialog.open(ModalCompradoresComponent);
  }

  fb(e) {
    let url = 'https://xloto.com.br/vendas';
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
