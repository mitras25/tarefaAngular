import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent {

  users = [
    {name: 'Roberto', age: 17, isAdmin: true},
    {name: 'Carlos', age: 27, isAdmin: false},
    {name: 'Maria', age: 17, isAdmin: true},
    {name: 'Joana', age: 37, isAdmin: false},
  ]

}
