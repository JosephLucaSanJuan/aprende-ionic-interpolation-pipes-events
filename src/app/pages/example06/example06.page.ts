import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example06',
  templateUrl: './example06.page.html',
  styleUrls: ['./example06.page.scss'],
})
export class Example06Page implements OnInit {
  numbers:number[] = [0];
  fruits:string[] = [""];

  inputNumber:number | null = null;
  inputFruit:string | null = "";

  constructor() { }

  ngOnInit() {
    this.numbers = [1, 5, 8, 24, 11, 55]
    this.fruits = ["pera", "manzana", "melón", "sandía", "mango"]
  }

  insertNumber(){
    if(this.inputNumber)
      this.numbers.push(this.inputNumber)
    this.inputNumber = null; //limpia el input
  }

  insertFruit(){
    if (this.inputFruit)
      this.fruits.push(this.inputFruit)
    this.inputFruit = null; //limpia el input
  }
}
