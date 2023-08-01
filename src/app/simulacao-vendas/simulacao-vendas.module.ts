import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulacaoVendasComponent } from './simulacao-vendas.component';
import { AngularCountdownDateTimeModule } from 'angular-countdown-date-time';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NavbarComponent } from './navbar/navbar.component';
import { ChamadaComponent } from './chamada/chamada.component';
import { SimulacaoComponent } from './simulacao/simulacao.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { BonusComponent } from './bonus/bonus.component';
import { TermosComponent } from './termos/termos.component';



@NgModule({
  declarations: [SimulacaoVendasComponent, NavbarComponent, ChamadaComponent, SimulacaoComponent, SocialMediaComponent, BonusComponent, TermosComponent],
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
export class SimulacaoVendasModule { }
