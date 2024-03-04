import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-dois',
  templateUrl: './servico-dois.component.html',
  styleUrls: ['./servico-dois.component.scss']
})
export class ServicoDoisComponent implements OnInit {
  whatsappNumber: string = "5561996754537";
  loading = false;
  
  constructor() { }

  ngOnInit(): void {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
