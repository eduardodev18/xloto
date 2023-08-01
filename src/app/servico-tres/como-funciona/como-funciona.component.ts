import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalTermosComponent } from '../modal-termos/modal-termos.component';

@Component({
  selector: 'app-como-funciona',
  templateUrl: './como-funciona.component.html',
  styleUrls: ['./como-funciona.component.scss']
})
export class ComoFuncionaComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModalTermos(): any {
    this.dialog.open(ModalTermosComponent);
  }
}
