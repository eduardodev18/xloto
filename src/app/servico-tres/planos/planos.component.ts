import { Component, OnInit } from '@angular/core';
import { GestaoService } from 'src/app/domains/services/gestao/gestao.service';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})
export class PlanosComponent implements OnInit {
  panelOpenState = false;
  planoBasicoMensal = null
  planoBasicoAnual = null
  planoCompletoMensal = null
  planoCompletoAnual = null

  planoEscolhidoBasico = null;
  planoEscolhidoCompleto = null
  tipoPlano = true;


  constructor(private gestaoService: GestaoService) { }

  ngOnInit(): void {
    this.buscarPlanos();
  }


  buscarPlanos() {
    this.gestaoService.buscarPlanoMensaisBasico().subscribe((resp) => {
      this.planoBasicoMensal = resp[0].value;
      this.planoEscolhidoBasico = this.planoBasicoMensal[0];
    })

    this.gestaoService.buscarPlanoAnualBasico().subscribe((resp) => {
      this.planoBasicoAnual = resp[0].value;
    })

    this.gestaoService.buscarPlanoMensalCompleto().subscribe((resp) => {
      this.planoCompletoMensal = resp[0].value;
      this.planoEscolhidoCompleto = this.planoCompletoMensal[0];
    })

    this.gestaoService.buscarPlanoAnualCompleto().subscribe((resp) => {
      this.planoCompletoAnual = resp[0].value;
    })
  }

  switchPlanos(event) {
    this.tipoPlano = !this.tipoPlano;

    if(this.tipoPlano === true) {
      this.planoEscolhidoBasico = this.planoBasicoMensal[0];
      this.planoEscolhidoCompleto = this.planoCompletoMensal[0];
    } else {
      this.planoEscolhidoCompleto = this.planoCompletoAnual[0];
      this.planoEscolhidoBasico = this.planoBasicoAnual[0];
    }
  }

  // PLANO BÁSICO
  incrementPlanoBasico(planoAtual): any {
    let index;

    if (planoAtual.id >= 13) return false;

    index = planoAtual.id + 1;

    if (this.tipoPlano === true) this.planoEscolhidoBasico = this.planoBasicoMensal[index - 1];
    if (this.tipoPlano === false) this.planoEscolhidoBasico = this.planoBasicoAnual[index - 1];
  }

  decrementPlanoBasico(planoAtual): any {
    let index;

    if (planoAtual.id <= 1) return false;

    index = planoAtual.id - 1;

    if (this.tipoPlano === true) this.planoEscolhidoBasico = this.planoBasicoMensal[index - 1];
    if (this.tipoPlano === false) this.planoEscolhidoBasico = this.planoBasicoAnual[index - 1];
  }

  // PLANO COMPLETO
  incrementPlanoCompleto(planoAtual): any {
    let index;

    if (planoAtual.id >= 13) return false;

    index = planoAtual.id + 1;

    if (this.tipoPlano === true) this.planoEscolhidoCompleto = this.planoCompletoMensal[index - 1];
    if (this.tipoPlano === false) this.planoEscolhidoCompleto = this.planoCompletoAnual[index - 1];
  }

  decrementPlanoCompleto(planoAtual): any {
    let index;

    if (planoAtual.id <= 1) return false;

    index = planoAtual.id - 1;

    if (this.tipoPlano === true) this.planoEscolhidoCompleto = this.planoCompletoMensal[index - 1];
    if (this.tipoPlano === false) this.planoEscolhidoCompleto = this.planoCompletoAnual[index - 1];
  }

  comprar(number) {
    if(number === 1) window.open(this.planoEscolhidoBasico.link, '_blank');
    if(number === 2) window.open(this.planoEscolhidoCompleto.link, '_blank');
  }
}
