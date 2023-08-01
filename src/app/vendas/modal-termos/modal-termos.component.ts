import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-termos',
  templateUrl: './modal-termos.component.html',
  styleUrls: ['./modal-termos.component.scss']
})
export class ModalTermosComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeAll() {
    this.matDialog.closeAll();
  }
}
