import { Component, OnInit } from '@angular/core';
import { VendasService } from 'src/app/domains/services/vendas/vendas.service';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})
export class PlanosComponent implements OnInit {
  panelOpenState = false;
  planosVendas = null

  constructor(private vendasService: VendasService) { }

  ngOnInit(): void {
    this.buscarPlanosInicias();
  }

  buscarPlanosInicias() {
    this.vendasService.buscarPlanosIniciais().subscribe((resp) => {
      this.planosVendas = resp[0].value;
    })
  }


  comprar(number) {

    if(number === 1) {
      window.open(this.planosVendas[0].link, '_blank');
    }

    if(number === 2) {
      window.open(this.planosVendas[1].link, '_blank');
    }

    if(number === 3) {
      window.open(this.planosVendas[2].link, '_blank');
    }
  }
}
