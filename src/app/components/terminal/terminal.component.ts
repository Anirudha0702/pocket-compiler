import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css'
})
export class TerminalComponent {
  height=30;
  resizing=false
  constructor(private ref:ElementRef){}
  startResize(event:MouseEvent){
    this.resizing=true;
    event.preventDefault();
    event.stopPropagation();
  }
  resize(event:MouseEvent){
    if(this.resizing){
      const delY=event.clientY-this.ref.nativeElement.offsetTop;
      console.log(event.clientY,this.ref.nativeElement.offsetTop);
      this.height=Math.max(100,delY);
    }
  }
  stopResize(event:MouseEvent){
    this.resizing=false;
  }
}
