import { DepositoComponent } from './deposito/deposito.component';
import { SaqueComponent } from './saque/saque.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaSaldoComponent } from './consulta-saldo/consulta-saldo.component';

const routes: Routes = [
  { path: 'consultar-saldo', component: ConsultaSaldoComponent },
  {path: 'saque', component: SaqueComponent },
  {path: 'deposito', component: DepositoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
