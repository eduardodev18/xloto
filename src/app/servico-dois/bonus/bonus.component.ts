import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/domains/services/promocao/promocao.service';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss']
})
export class BonusComponent implements OnInit {
  dataBonus;
  statusData;

  constructor(private promocaoService: PromocaoService) { }

  ngOnInit(): void {
    this.buscarBonus();
    this.buscarStatusBonus();
  }

  buscarBonus() {
    this.promocaoService.buscarBonus().subscribe((res) => {
      this.dataBonus = res[res.length - 1].value;
    })
  }

  buscarStatusBonus() {
    this.promocaoService.buscarStatusBonus().subscribe((res) => {
      this.statusData = res[res.length - 1].value;
    })
  }
}
