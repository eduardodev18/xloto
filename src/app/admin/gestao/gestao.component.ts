import { Component, OnInit } from '@angular/core';
import { GestaoService } from 'src/app/domains/services/gestao/gestao.service';

@Component({
  selector: 'app-gestao',
  templateUrl: './gestao.component.html',
  styleUrls: ['./gestao.component.scss']
})
export class GestaoComponent implements OnInit {

  // PLANO BÁSICO MENSAL
  planoMensalBasico = null;
  planoMensalBasicoKey = null;

  // PLANO BÁSICO ANUAL
  planoMensalAnual = null;
  planoMensalAnualKey = null;

  // PLANO COMPLETO MENSAL
  planoMensalCompleto = null;
  planoMensalCompletoKey = null;

  // PLANO COMPLETO ANUAL
  planoAnualCompleto = null;
  planoAnualCompletoKey = null;

  // COMPRA COLETIVA
  compraColetiva = null;
  compraColetivaKey = null;

  contatos = null;
  compradores = null;

  constructor(private gestaoService: GestaoService) { }

  ngOnInit(): void {
    this.buscarPlanoMensalBasico();
    this.buscarPlanoAnualBasico();
    this.buscarPlanoMensalCompleto();
    this.buscarPlanoAnualCompleto();
    this.buscarCompraColetiva();
    this.buscarContatos();
    this.buscarCompradores()
  }

  buscarPlanoMensalBasico() {
    this.gestaoService.buscarPlanoMensaisBasico().subscribe((resp) => {
      this.planoMensalBasico = resp[0].value;
      this.planoMensalBasicoKey = resp[0].key;
    })
  }

  buscarPlanoAnualBasico() {
    this.gestaoService.buscarPlanoAnualBasico().subscribe((resp) => {
      this.planoMensalAnual = resp[0].value;
      this.planoMensalAnualKey = resp[0].key;
    })
  }

  buscarPlanoMensalCompleto() {
    this.gestaoService.buscarPlanoMensalCompleto().subscribe((resp) => {
      this.planoMensalCompleto = resp[0].value;
      this.planoMensalCompletoKey = resp[0].key;
    })
  }


  buscarPlanoAnualCompleto() {
    this.gestaoService.buscarPlanoAnualCompleto().subscribe((resp) => {
      this.planoAnualCompleto = resp[0].value;
      this.planoAnualCompletoKey = resp[0].key;
    })
  }

  buscarCompraColetiva() {
    this.gestaoService.buscarCompraColetiva().subscribe((resp) => {
      this.compraColetiva = resp[0].value;
      this.compraColetivaKey = resp[0].key;
    })
  }

  atualizarPlanoMensalBasico(index, tipo, valor) {
    this.buscarPlanoMensalBasico();

    if (tipo === 1) this.planoMensalBasico[index].valor = valor;
    if (tipo === 2) this.planoMensalBasico[index].link = valor;

    this.gestaoService.atualizarPlanoMensalBasico(this.planoMensalBasico, this.planoMensalBasicoKey);

    window.alert('Atualizado')
  }

  buscarCompradores() {
    this.gestaoService.buscarCompradores().subscribe((resp: any) => {
      let array = [];
      
      if(resp.length) {
        resp.map((item) => {
          item.value.key = item.key
          array.push(item.value);
        })
      }
      
      this.compradores = array;
      console.log('COMPRADORES', this.compradores)
    })
  }

  deletarCompradores(index) {
    this.gestaoService.deleteCompradores(this.compradores[index].key);
  }

  atualizarPlanoAnualBasico(index, tipo, valor) {
    this.buscarPlanoAnualBasico();

    if (tipo === 1) this.planoMensalAnual[index].valor = valor;
    if (tipo === 2) this.planoMensalAnual[index].link = valor;

    this.gestaoService.atualizarPlanoAnualBasico(this.planoMensalAnual, this.planoMensalAnualKey);

    window.alert('Atualizado')
  }

  atualizarPlanoMensalCompleto(index, tipo, valor) {
    this.buscarPlanoMensalCompleto();

    if (tipo === 1) this.planoMensalCompleto[index].valor = valor;
    if (tipo === 2) this.planoMensalCompleto[index].link = valor;

    this.gestaoService.atualizarPlanoMensalCompleto(this.planoMensalCompleto, this.planoMensalCompletoKey);

    window.alert('Atualizado')
  }

  atualizarPlanoAnualCompleto(index, tipo, valor) {
    this.buscarPlanoAnualCompleto();

    if (tipo === 1) this.planoAnualCompleto[index].valor = valor;
    if (tipo === 2) this.planoAnualCompleto[index].link = valor;

    this.gestaoService.atualizarPlanoAnualCompleto(this.planoAnualCompleto, this.planoAnualCompletoKey);

    window.alert('Atualizado')
  }

  atualizarCompraColetiva(index, tipo, valor) {
    this.buscarCompraColetiva();

    if (tipo === 1) this.compraColetiva[index].valor = valor;
    if (tipo === 2) this.compraColetiva[index].link = valor;

    this.gestaoService.atualizarCompraColetiva(this.compraColetiva, this.compraColetivaKey);

    window.alert('Atualizado')
  }

  enviarComprador(comprador, loterica, data) {
    
    const compradorArray = {
      nome: comprador,
      loterica: loterica,
      data: data
    } 

    this.gestaoService.enviarCompradores(compradorArray);

    window.alert("Enviado");
  }

  buscarContatos() {
    this.gestaoService.buscarContatos().subscribe((resp) => {
      this.contatos = [resp[0].value];
    })
  }
}
