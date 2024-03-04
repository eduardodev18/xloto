import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicoDoisComponent } from './servico-dois/servico-dois.component';

const routes: Routes = [
  { path: '', component: ServicoDoisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
