import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { GestaoService } from 'src/app/domains/services/gestao/gestao.service';

declare var fs_9d926d75dcc91b9e9f946c428bb124fbee5e40d1422926416caead4269b839c9: any;

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements AfterViewInit {
  @ViewChild('divId', { static: true }) divElementRef: ElementRef;

  constructor(
    private gestaoService: GestaoService,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    // Código para adicionar o script na div específica
    const script = this.renderer.createElement('script');
    script.src = 'https://xloto-449630514394465361.myfreshworks.com/crm/sales/web_forms/9d926d75dcc91b9e9f946c428bb124fbee5e40d1422926416caead4269b839c9/form.js';
    this.renderer.appendChild(this.divElementRef.nativeElement, script);
  }

  enviarCadastro(email, nome, msg) {
    const array = {
      email: email,
      nome: nome,
      msg: msg,
    };

    this.gestaoService.enviarContato(array);

    window.alert('Enviado');
  }
}
