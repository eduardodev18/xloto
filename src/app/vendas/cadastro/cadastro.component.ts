import { Component, OnInit } from '@angular/core';
import { VendasService } from 'src/app/domains/services/vendas/vendas.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(private vendaService: VendasService) { }

  ngOnInit(): void {
  }


  enviarCadastro(email, nome, msg) {

    const array = {
      email: email,
      nome: nome,
      msg: msg
    }

    this.vendaService.enviarContato(array);

    window.alert("Enviado");
  }
}
