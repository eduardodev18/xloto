import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoDoisComponent } from './servico-dois.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AngularCountdownDateTimeModule } from 'angular-countdown-date-time';
import { NgxMaskModule } from 'ngx-mask';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { BonusComponent } from './bonus/bonus.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ChamadaComponent } from './chamada/chamada.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { CompraColetivaComponent } from './compra-coletiva/compra-coletiva.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { DificuldadesComponent } from './dificuldades/dificuldades.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { GarantiaComponent } from './garantia/garantia.component';
import { ModalCompradoresComponent } from './modal-compradores/modal-compradores.component';
import { ModalDicasComponent } from './modal-dicas/modal-dicas.component';
import { ModalTermosComponent } from './modal-termos/modal-termos.component';
import { ModalVideoComponent } from './modal-video/modal-video.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlanosComponent } from './planos/planos.component';
import { SolucoesComponent } from './solucoes/solucoes.component';
import { XlotoComponent } from './xloto/xloto.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';



@NgModule({
  declarations: [ServicoDoisComponent, NavbarComponent, ChamadaComponent, DificuldadesComponent, SolucoesComponent, BeneficiosComponent, DepoimentosComponent, ModalVideoComponent, PlanosComponent, CompraColetivaComponent, ModalCompradoresComponent, ModalTermosComponent, BonusComponent, GarantiaComponent, ComoFuncionaComponent, FaqComponent, CadastroComponent, XlotoComponent, FooterComponent, ModalDicasComponent, MenuMobileComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    CarouselModule,
    MatDialogModule,
    MatExpansionModule,
    MatTooltipModule,
    AngularCountdownDateTimeModule,
    MatInputModule,
    NgxYoutubePlayerModule.forRoot(),
    ClipboardModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollToModule.forRoot(),
    NgxMaskModule.forRoot()
  ]
})
export class ServicoDoisModule { }
