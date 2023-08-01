import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GestaoComponent } from './gestao/gestao.component';
import { SimulacaoGestaoComponent } from './simulacao-gestao/simulacao-gestao.component';
import { SimulacaoVendasComponent } from './simulacao-vendas/simulacao-vendas.component';
import { VendasComponent } from './vendas/vendas.component';
import { PromocaoServicoOneComponent } from './servico-um/promocao-one.component';
import { ServicoDoisComponent } from './servico-dois/servico-dois.component';
import { ServicoTresComponent } from './servico-tres/servico-tres.component';

const routes: Routes = [
  //{ path: '', component: VendasComponent },
  //{ path: '', component: GestaoComponent },
  //{ path: '', component: SimulacaoGestaoComponent},
  //{ path: '', component: SimulacaoVendasComponent},
  // { path: '', component: AdminComponent },
  // { path: '', component: PromocaoServicoOneComponent },
  { path: '', component: ServicoDoisComponent }
  // { path: '', component: ServicoTresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
