import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   chill: boolean= false;
   hang:boolean= false;


   constructor() { }

   ngOnInit() { }

}
turnOn() {
   for (let i = 0; i < this.buttonState.length; i++) {
      this.buttonState[i] = true;
   }
   return this.buttonState;
}