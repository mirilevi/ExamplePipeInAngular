import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  
  }
  num:number=500;
  birthday = new Date(1988, 3, 15);
  name:string="miri";

}

