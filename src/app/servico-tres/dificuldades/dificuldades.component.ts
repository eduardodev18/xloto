import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDicasComponent } from '../modal-dicas/modal-dicas.component';

@Component({
  selector: 'app-dificuldades',
  templateUrl: './dificuldades.component.html',
  styleUrls: ['./dificuldades.component.scss']
})
export class DificuldadesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(ModalDicasComponent, {
      width: '450px'
    });
  }
}
