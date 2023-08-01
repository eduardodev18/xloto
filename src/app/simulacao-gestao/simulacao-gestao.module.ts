import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';



import { SimulacaoComponent } from './simulacao/simulacao.component';
import { SimulacaoGestaoComponent } from './simulacao-gestao.component';
import { AngularCountdownDateTimeModule } from 'angular-countdown-date-time';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { BonusComponent } from './bonus/bonus.component';
import { TermosComponent } from './termos/termos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChamadaComponent } from './chamada/chamada.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ModalCompradoresComponent } from './modal-compradores/modal-compradores.component';

@NgModule({
  declarations: [SimulacaoComponent, SimulacaoGestaoComponent, SocialMediaComponent, BonusComponent, TermosComponent, NavbarComponent, ChamadaComponent, ModalCompradoresComponent],
  imports: [
    CommonModule,
    AngularCountdownDateTimeModule,
    MatButtonModule,
    ClipboardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    ScrollToModule.forRoot()
  ]
})
export class SimulacaoGestaoModule { }
