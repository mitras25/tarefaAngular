import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
  myColor!: string
  myFontSize: string = '18px'

  changeColor(event: any){
    this.myColor = event.target.value
  }

  changeFontSize(event: any){
    this.myFontSize = event.target.check ? event.target.value : '18px'
  }
}
