import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { AngularCountdownDateTimeModule } from 'angular-countdown-date-time';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import {ClipboardModule} from '@angular/cdk/clipboard';

import { VendasComponent } from './vendas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChamadaComponent } from './chamada/chamada.component';
import { DificuldadesComponent } from './dificuldades/dificuldades.component';
import { SolucoesComponent } from './solucoes/solucoes.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { ModalVideoComponent } from './modal-video/modal-video.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { PlanosComponent } from './planos/planos.component';
import { CompraColetivaComponent } from './compra-coletiva/compra-coletiva.component';
import { BonusComponent } from './bonus/bonus.component';
import { GarantiaComponent } from './garantia/garantia.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { FaqComponent } from './faq/faq.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { XlotoComponent } from './xloto/xloto.component';
import { FooterComponent } from './footer/footer.component';
import { ModalTermosComponent } from './modal-termos/modal-termos.component';
import { ModalCompradoresComponent } from './modal-compradores/modal-compradores.component';


@NgModule({
  declarations: [VendasComponent, NavbarComponent, ChamadaComponent, DificuldadesComponent, SolucoesComponent, BeneficiosComponent, DepoimentosComponent, ModalVideoComponent, PlanosComponent, CompraColetivaComponent, BonusComponent, GarantiaComponent, ComoFuncionaComponent, FaqComponent, CadastroComponent, XlotoComponent, FooterComponent, ModalTermosComponent, ModalCompradoresComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    CarouselModule,
    MatDialogModule,
    MatExpansionModule,
    MatTooltipModule,
    AngularCountdownDateTimeModule,
    MatInputModule,
    NgxYoutubePlayerModule.forRoot(),
    ClipboardModule,
    ScrollToModule.forRoot()
  ],
})
export class VendasModule { }
