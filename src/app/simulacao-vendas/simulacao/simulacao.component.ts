import { Component, OnInit } from '@angular/core';
import { VendasService } from 'src/app/domains/services/vendas/vendas.service';

@Component({
  selector: 'app-simulacao',
  templateUrl: './simulacao.component.html',
  styleUrls: ['./simulacao.component.scss']
})
export class SimulacaoComponent implements OnInit {
  endTime = '2022-04-02T00:00:00';
  compraColetiva = null
  planoEscolhido = null

  constructor(private vendaService: VendasService) { }

  ngOnInit(): void {
    this.buscarPlanosInicias();
  }

  buscarPlanosInicias() {
    this.vendaService.buscarPlanosIniciaisColetiva().subscribe((resp) => {
      this.compraColetiva = resp[0].value;
      this.planoEscolhido = this.compraColetiva[0];
    })
  }


  increment(planoAtual): any {
    let index;

    if (planoAtual.id >= 3) return false;

    index = planoAtual.id + 1;



    this.planoEscolhido = this.compraColetiva[index - 1];
  }

  decrement(planoAtual): any {
    let index;

    if (planoAtual.id <= 1) return false;

    index = planoAtual.id - 1;

    this.planoEscolhido = this.compraColetiva[index - 1];
  }


  comprar() {
    window.open(this.planoEscolhido.link, '_blank');
  }
}
