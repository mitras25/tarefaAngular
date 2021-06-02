import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent  {
  users = [
    {name: 'Roberto', age: 17, isAdmin: true},
    {name: 'Carlos', age: 27, isAdmin: false},
    {name: 'Maria', age: 17, isAdmin: true},
    {name: 'Joana', age: 37, isAdmin: false},
  ]

}
