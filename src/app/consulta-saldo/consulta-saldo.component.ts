import { Component, OnInit } from '@angular/core';
import { ConsultaSaldoService } from '../consulta-saldo.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consulta-saldo',
  templateUrl: './consulta-saldo.component.html',
  styleUrls: ['./consulta-saldo.component.css']
})
export class ConsultaSaldoComponent implements OnInit {

  infoSaldo: any
  payload: any;

  constructor(private saldoService: ConsultaSaldoService) { }

  ngOnInit(): void {
    this.payload = {};
    this.infoSaldo = {};
  }

  consultarSaldo(frm: FormGroup) {
    this.saldoService.consultarSaldo(this.payload).subscribe(response => {
      this.infoSaldo = response;
      frm.reset();
    });
  }
}
