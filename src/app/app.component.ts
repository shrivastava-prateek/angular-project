import { Component } from '@angular/core';


export function log(className){
  console.log(className);
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


@log
export class AppComponent {
  title = 'ng7App';

  constructor(){
    console.log("inside constructor");
  }

  myCustomFunc(){
    console.log("Inside my custom Func");
  }
}





