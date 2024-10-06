import { Component, OnInit } from '@angular/core';
import { LIST_OF_EMPLOYEES } from 'src/app/assets/list-of-employees';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-example07',
  templateUrl: './example07.page.html',
  styleUrls: ['./example07.page.scss'],
})
export class Example07Page implements OnInit {
  listOfEmployees: Employee[] = [];

  constructor() { }

  ngOnInit() {
    this.listOfEmployees = LIST_OF_EMPLOYEES;
  }

}
