import { Component, signal } from '@angular/core';


@Component({
    selector:'h12',
    standalone:true || false,
    imports:[],
    templateUrl: './header.component.html',
    styleUrl:'./header.css',
})

export class Header{
    lt = 1;

    text = "Let's get started!";

    showText = signal("");

    
    showText1 = signal("Time to learn all about Angular!");

    text1 = "Time to learn all about Angular!";

    addCom(event:any){


        if(event.wheelDelta < 0)
        {
             let i = this.showText().length;
             this.showText.set(this.showText() + this.text.slice(i, i+1));
        }
        else{
            this.showText.set(this.showText().slice(0, this.showText.length - 1));
        }
    }
    removeCom(event: any){
 
        if(event.wheelDelta < 0){
             let i = this.showText1.length;
             this.showText1.set(this.showText1().slice(0,i-2));
        }
        else{
             let i = this.showText1().length;

             this.showText1.set(this.text1.slice(0, i+2));
        }
    }
}