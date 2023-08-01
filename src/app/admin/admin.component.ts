import { Component, OnInit } from '@angular/core';
import {  AngularFireAuth } from '@angular/fire/auth'
import { MatDialog } from '@angular/material/dialog';
import { ModalLoginComponent } from './modal-login/modal-login.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  usuarioLogado: boolean;
  tab = 1;

  constructor(private afAuth: AngularFireAuth, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.verificarStatusLogin();
  }

  choosetab(number) {
    this.tab = number;
  }

  verificarStatusLogin() {
    this.afAuth.authState.subscribe(usuario => {
      this.usuarioLogado = !!usuario;

      if(!this.usuarioLogado) {
        this.dialog.open(ModalLoginComponent, {
          disableClose: true
        })
      }
    });
  }
}
