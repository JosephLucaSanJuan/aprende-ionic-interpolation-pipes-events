import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example05',
  templateUrl: './example05.page.html',
  styleUrls: ['./example05.page.scss'],
})
export class Example05Page implements OnInit {
  numbers:number[] = [0];
  fruits:string[] = [""];

  constructor() { }

  ngOnInit() {
    this.numbers = [1, 5, 8, 24, 11, 55]
    this.fruits = ["pera", "manzana", "melón", "sandía", "mango"]
  }

}
