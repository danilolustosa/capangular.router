import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteViewComponent } from './cliente/cliente-view/cliente-view.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';

const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'fornecedor', component: FornecedorComponent },
  { path: 'clienteView', component: ClienteViewComponent },
  { path: '', redirectTo: '/cliente', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
