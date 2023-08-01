import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/domains/services/promocao/promocao.service';
import { DatePipe } from '@angular/common';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-promocao',
  templateUrl: './promocao.component.html',
  styleUrls: ['./promocao.component.scss'],
})
export class PromocaoComponent implements OnInit {
  planoDicas = [];
  BonusForm: FormGroup;
  items: FormArray;
  statusBonus;

  constructor(
    private promocaoService: PromocaoService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.BonusForm = new FormGroup({
      items: new FormArray([this.createItem()])
    });

    this.buscarDicas();
    this.buscarStatusBonus();
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      titulo: '',
      descricao: '',
    });
  }
  
  addItem(): void {
    this.items = this.BonusForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  buscarDicas() {
    this.promocaoService.buscarDicas().subscribe((resp) => {
      if (resp) {
        resp.map((item) => {
          this.planoDicas.push(item.value);
        });
      }
    });
  }

  enviarPromocao(titulo: string, descricao: string, data: string) {
  
    let dataFormatada = null;

    const partesData = data.split('/');
    if (partesData.length === 3) {
      const dia = partesData[0];
      const mes = partesData[1];
      const ano = partesData[2];
      dataFormatada = `${ano}-${mes}-${dia}T00:00:00`;
      console.log(dataFormatada);
    } 

    let payload = {
      "titulo": titulo,
      "descricao": descricao,
      "data": dataFormatada
    }

    this.promocaoService.enviarPromocao(payload);
    window.alert("Atualizado!");
  }

  enviarChamada(titulo, descricao, idVideo)  {

    const payload = {
      "titulo": titulo,
      "descricao": descricao,
      "idVideo": idVideo
    }

    this.promocaoService.enviarChamada(payload);
    window.alert("Atualizado!");
  }

  enviarBonus()  {
    this.promocaoService.enviarBonus(this.BonusForm.value.items);
    window.alert("Atualizado!");
  }

  enviarStatusBonus()  {
    this.promocaoService.enviarStatusBonus(this.statusBonus);
    window.alert("Atualizado!");
  }

  buscarStatusBonus() {
    this.promocaoService.buscarStatusBonus().subscribe((res) => {
      this.statusBonus = res[res.length - 1].value;
    })
  }
}
