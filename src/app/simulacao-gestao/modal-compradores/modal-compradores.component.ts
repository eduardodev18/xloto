import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GestaoService } from 'src/app/domains/services/gestao/gestao.service';

@Component({
  selector: 'app-modal-compradores',
  templateUrl: './modal-compradores.component.html',
  styleUrls: ['./modal-compradores.component.scss']
})
export class ModalCompradoresComponent implements OnInit {
  compradores = null;
  constructor(private matDialog: MatDialog, private gestaoService: GestaoService) { }

  ngOnInit(): void {
  }

  closeAll() {
    this.matDialog.closeAll();
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
}
