import { Component, OnInit } from '@angular/core';
import { VendasService } from 'src/app/domains/services/vendas/vendas.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {
  planosVendas
  planosVendasKey

  planosColetivo;
  planosColetivoKey

  contatos = null;
  compradores = null;

  constructor(private vendasService: VendasService) { }

  ngOnInit(): void {
    this.buscarPlanosInicias();
    this.buscarPlanosColetivos();
    this.buscarContatos();
    this.buscarCompradores();
  }

  buscarPlanosInicias() {
    this.vendasService.buscarPlanosIniciais().subscribe((resp) => {
      this.planosVendas = resp[0].value;
      this.planosVendasKey = resp[0].key
    })
  }

  buscarPlanosColetivos() {
    this.vendasService.buscarPlanosIniciais().subscribe((resp) => {
      this.planosColetivo = resp[0].value;
      this.planosColetivoKey = resp[0].key
    })
  }

  buscarCompradores() {
    this.vendasService.buscarCompradores().subscribe((resp: any) => {
      let array = [];
      
      if(resp.length) {
        resp.map((item) => {
          item.value.key = item.key
          array.push(item.value);
        })
      }
      
      this.compradores = array;
    })
  }

  deletarCompradores(index) {
    this.vendasService.deleteCompradores(this.compradores[index].key);
  }

  atualizarPlanoIniciais(index, tipo, value) {
    this.buscarPlanosInicias();

     if(tipo === 1) this.planosVendas[index].valor = value;
     if(tipo === 2) this.planosVendas[index].link = value;

     this.vendasService.atualizarPlanosIniciais(this.planosVendas, this.planosVendasKey);

     window.alert('Atualizado')
  }


  atualizarPlanoColetivo(index, tipo, value) {
    this.buscarPlanosColetivos();

     if(tipo === 1) this.planosColetivo[index].valor = value;
     if(tipo === 2) this.planosColetivo[index].link = value;

     this.vendasService.atualizarPlanosColetivos(this.planosColetivo, this.planosColetivoKey);

     window.alert('Atualizado')
  }

  enviarComprador(comprador, loterica, data) {
    
    const compradorArray = {
      nome: comprador,
      loterica: loterica,
      data: data
    } 

    this.vendasService.enviarCompradores(compradorArray);

    window.alert("Enviado");
  }

  buscarContatos() {
    this.vendasService.buscarContatos().subscribe((resp) => {
      this.contatos = [resp[0].value];
    })
  }
}
