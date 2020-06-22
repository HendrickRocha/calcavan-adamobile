import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { SSL_OP_NO_TLSv1_2 } from 'constants';
import { parse } from 'path';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  visorCalculadora: string = "";
  operador: string;
  valorAcumulado: number = 0;
  visorOperador: string = "";
  
  

  constructor() { }

  clicou(valor: any) {
    //console.log(valor);
    this.visorCalculadora += valor;
  }

  op(op: any) {
    this.visorOperador = op;
    
  }

  clear(click: any) {
    this.visorCalculadora = click;
  }

  clearAll(click: any) {
    this.visorCalculadora = click;
    this.visorOperador = click;
  }

  armazenar() {

    this.valorAcumulado = parseFloat(this.visorCalculadora);
  }

  acao() {

    var results 
    var aux
    aux = parseFloat(this.visorCalculadora);
    switch (this.visorOperador) {
      case "X":
        results = this.valorAcumulado * aux;
        this.visorCalculadora = results
        break;

      case "-":
        results = this.valorAcumulado - aux;
        this.visorCalculadora = results
        break;

      case "+":
        results = this.valorAcumulado + aux;
        this.visorCalculadora = results
        break;

      case "/":
        results = this.valorAcumulado / aux;
        this.visorCalculadora = results
        break;
    }

    console.log("VALORACUMLADO:", this.valorAcumulado);
    console.log("AUX:", aux);
    console.log("results:", results);
    //console.log('Operador: ', this.operador);
    // this.valorAcumulado = parseFloat(this.visorCalculadora);
    // this.visorOperador = "" + this.results;
  }

}
