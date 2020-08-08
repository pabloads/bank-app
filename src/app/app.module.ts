import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaSaldoComponent } from './consulta-saldo/consulta-saldo.component';
import {ConsultaSaldoService } from './consulta-saldo.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaqueComponent } from './saque/saque.component';
import { DepositoComponent } from './deposito/deposito.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaSaldoComponent,
    SaqueComponent,
    DepositoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule.forRoot()
  ],
  providers: [ConsultaSaldoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
