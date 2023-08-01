import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VendasService } from 'src/app/domains/services/vendas/vendas.service';

@Component({
  selector: 'app-modal-compradores',
  templateUrl: './modal-compradores.component.html',
  styleUrls: ['./modal-compradores.component.scss']
})
export class ModalCompradoresComponent implements OnInit {
  compradores = null;
  constructor(private matDialog: MatDialog, private vendasService: VendasService) { }

  ngOnInit(): void {
    this.buscarCompradores();
  }

  buscarCompradores() {
    this.vendasService.buscarCompradores().subscribe((resp) => {
      let array = [];
      
      if(resp.length) {
        resp.map((item) => {
          array.push(item.value);
        })
      }

      this.compradores = array;
    })
  }

  closeAll() {
    this.matDialog.closeAll();
  }
}
