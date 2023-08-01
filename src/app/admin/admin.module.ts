import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminComponent } from './admin.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';


import { VendasComponent } from './vendas/vendas.component';
import { GestaoComponent } from './gestao/gestao.component';
import { PromocaoComponent } from './promocao/promocao.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalLoginComponent } from './modal-login/modal-login.component';

@NgModule({
  declarations: [AdminComponent, VendasComponent, GestaoComponent, PromocaoComponent, ModalLoginComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DatePipe]
})
export class AdminModule { }
