import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {
  email;
  password;

  constructor(private auth: AngularFireAuth, private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  login(email, password) {

    this.auth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.matDialog.closeAll();
      })
      .catch(error => {
        alert('Login inválido')
      });
  }

}
