import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConsultaSaldoService {

  consultaUrl = 'http://localhost:8080/transaction/balance';

  constructor(private http: HttpClient) { 

  }

  consultarSaldo(payload: any) {
    const params = new HttpParams()
    .set('agencyNumber', payload.agencia)
    .set('accountNumber', payload.conta)
    .set('accountType', "CC");
  
    return this.http.get<any[]>(this.consultaUrl, {params});
  }
}
