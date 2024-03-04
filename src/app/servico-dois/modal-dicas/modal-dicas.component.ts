import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PromocaoService } from 'src/app/domains/services/promocao/promocao.service';

@Component({
  selector: 'app-modal-dicas',
  templateUrl: './modal-dicas.component.html',
  styleUrls: ['./modal-dicas.component.scss'],
})
export class ModalDicasComponent implements AfterViewInit {
  @ViewChild('divId', { static: true }) divElementRef: ElementRef;
  
  dicasForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required]),
    whatsapp: new FormControl('', [Validators.required]),
  });

  constructor(
    private promocaoService: PromocaoService,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
   
  }

  enviarDicas() {
    this.promocaoService.enviarDicasLoterica(this.dicasForm.value);

    window.alert('Em breve entraremos em contato!');
  }
}
