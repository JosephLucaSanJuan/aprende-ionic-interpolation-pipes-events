import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example01',
  templateUrl: './example01.page.html',
  styleUrls: ['./example01.page.scss'],
})
export class Example01Page implements OnInit {

  x: number = 0;
  y: number = 0;
  word: string = "";
  person:any = {};

  constructor() { }

  ngOnInit() {
    this.x = 23;
    this.y = 9;
    this.word = "genial"
    this.person = {
      name: "Alan Brito",
      job: "desarrollador full-stack",
      salary: 2000
    };
  }

}
