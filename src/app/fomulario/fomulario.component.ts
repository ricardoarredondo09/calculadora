import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.css']
})
export class FomularioComponent {

  entrada: string = '0'
  operacion: string = ''
  operacionInterna: string = ''

  ingresarNumero(numero: number): void {
    if (this.entrada == '0') {
      this.entrada = ''
    }
    this.entrada = this.entrada + numero;
  }

  limpiarCadena(): void {
    if (this.entrada == '0') {
      this.operacion = ''
      this.operacionInterna = ''
    }
    this.entrada = '0'
  }


  calcularRestulado(): void {
    if (this.entrada != '0' && this.operacion != '' && !this.operacion.includes('=')) {
      this.operacion = this.operacion + this.entrada + " = ";
      this.operacionInterna = this.operacionInterna + this.entrada;
      this.entrada = eval(this.operacionInterna);

    }

  }

  operacionPrecionada(opcion: string): void {

    if (this.entrada != '0') {
      this.operacion = this.operacion + this.entrada
      this.operacionInterna = this.operacionInterna + this.entrada
      if (opcion == '÷') {
        this.operacion = this.operacion + ' ÷ '
        this.operacionInterna = this.operacionInterna + '/'
      }

      if (opcion == 'x') {
        this.operacion = this.operacion + ' x '
        this.operacionInterna = this.operacionInterna + '*'
      }

      if (opcion == '-') {
        this.operacion = this.operacion + ' - '
        this.operacionInterna = this.operacionInterna + '-'
      }

      if (opcion == '+') {
        this.operacion = this.operacion + ' + '
        this.operacionInterna = this.operacionInterna + '+'
      }

      this.entrada = '0'
    }

  }
}
