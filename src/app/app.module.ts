import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import { VendasModule } from './vendas/vendas.module';
import { GestaoModule } from './gestao/gestao.module';
import { SimulacaoGestaoModule } from './simulacao-gestao/simulacao-gestao.module';
import { SimulacaoVendasModule } from './simulacao-vendas/simulacao-vendas.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AdminModule } from './admin/admin.module';
import { PromocaoServicoUmModule } from './servico-um/promocao-um.module';
import { ServicoDoisModule } from './servico-dois/servico-dois.module';
import { ServicoTresModule } from './servico-tres/servico-tres.module';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServicoDoisModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
