import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-tres',
  templateUrl: './servico-tres.component.html',
  styleUrls: ['./servico-tres.component.scss']
})
export class ServicoTresComponent implements OnInit {
  whatsappNumber: string = "55123456789";
  constructor() { }

  ngOnInit(): void {
  }

}
