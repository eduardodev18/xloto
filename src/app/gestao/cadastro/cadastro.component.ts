import { Component, OnInit } from '@angular/core';
import { GestaoService } from 'src/app/domains/services/gestao/gestao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(private gestaoService: GestaoService) { }

  ngOnInit(): void {
  }
  
  enviarCadastro(email, nome, msg) {

    const array = {
      email: email,
      nome: nome,
      msg: msg
    }

    this.gestaoService.enviarContato(array);

    window.alert("Enviado");
  }
}
