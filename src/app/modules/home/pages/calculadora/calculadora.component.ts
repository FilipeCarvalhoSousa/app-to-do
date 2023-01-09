import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {

  numberPlaceholder = "Digite um numero";
  public operador: string = '';
  public resultado: number = 0;
  public valorOne: number = 0;
  public valorOneString: string = '';
  public valorTwoString: string = '';
  public valorTwo: number = 0;
  public firstNumber: boolean = true;
  public secondNumber: boolean = false;

  public trocaNumerica: boolean = true;

  public concatenarValoresOne(number: string): void {
    this.valorOneString += number;
    this.valorOne = parseInt(this.valorOneString);
  }

  public concatenarValoresTwo(number: string): void {
    this.valorTwoString += number;
    this.valorTwo = parseInt(this.valorTwoString);
  }

  public funcao(operador: string): void {
    switch (operador) {
      case '+':
        this.resultado = this.valorOne + this.valorTwo;
        this.firstNumber = false;
        this.secondNumber = true;
        break;
      case '-':
        this.resultado = this.valorOne - this.valorTwo;
        this.firstNumber = false;
        this.secondNumber = true;
        break;
      case '*':
        this.resultado = this.valorOne * this.valorTwo;
        this.firstNumber = false;
        this.secondNumber = true;
        break;
      case '/':
        this.resultado = this.valorOne / this.valorTwo;
        this.firstNumber = false;
        this.secondNumber = true;
        break;
      default:
        break;
    }
  }
}
