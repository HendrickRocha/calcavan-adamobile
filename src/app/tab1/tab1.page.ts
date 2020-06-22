import { Component, Query } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

n1:number;
n2:number;
resultadoFinal: number;
  constructor() { }

  fnSoma() {
    console.log("Função de soma foi acionada!");
    this.n1 = parseFloat( this.n1.toString());
    this.n2 = parseFloat( this.n2.toString());
    console.log("n1", this.n1);
    console.log("n2", this.n2);

    this.resultadoFinal = (this.n1 + this.n2);
    console.log("Resultado", this.resultadoFinal);
  }

  fnSub() {
    console.log("Função de subtração foi acionada!");
    this.n1 = parseFloat( this.n1.toString());
    this.n2 = parseFloat( this.n2.toString());
    console.log("n1", this.n1);
    console.log("n2", this.n2);

    this.resultadoFinal = (this.n1 - this.n2);
    console.log("Resultado", this.resultadoFinal);
  }

  fnMult() {
    console.log("Função de multiplicação foi acionada!");
    this.n1 = parseFloat( this.n1.toString());
    this.n2 = parseFloat( this.n2.toString());
    console.log("n1", this.n1);
    console.log("n2", this.n2);

    this.resultadoFinal = (this.n1 * this.n2);
    console.log("Resultado", this.resultadoFinal);
  }

  fnDiv() {
    console.log("Função de divisão foi acionada!");
    this.n1 = parseFloat( this.n1.toString());
    this.n2 = parseFloat( this.n2.toString());
    console.log("n1", this.n1);
    console.log("n2", this.n2);

    this.resultadoFinal = (this.n1 / this.n2);
    console.log("Resultado", this.resultadoFinal);
  }

  fnIgual() {
    console.log("Função de igual foi acionada!");
  }
  
  fnClear() {
    console.log("Função de limpar foi acionada!");
  }
}
