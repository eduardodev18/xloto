import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/domains/services/promocao/promocao.service';

@Component({
  selector: 'app-chamada',
  templateUrl: './chamada.component.html',
  styleUrls: ['./chamada.component.scss']
})
export class ChamadaComponent implements OnInit {
  dataPromocao: any;

  constructor(private promocaoService: PromocaoService) { }

  ngOnInit(): void {
    this.buscarChamada();
  }


  buscarChamada() {
    this.promocaoService.buscarChamada().subscribe((res) => {
      this.dataPromocao = res[res.length - 1].value;
    })
  }
}
