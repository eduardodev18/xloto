import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promocao-one',
  templateUrl: './promocao-one.component.html',
  styleUrls: ['./promocao-one.component.scss']
})
export class PromocaoServicoOneComponent implements OnInit {
  whatsappNumber: string = "55123456789";

  constructor() { }

  ngOnInit(): void {
  }

}
