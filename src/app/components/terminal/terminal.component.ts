// import { Component, ElementRef, HostListener } from '@angular/core';

// @Component({
//   selector: 'app-terminal',
//   standalone: true,
//   imports: [],

//   templateUrl: './terminal.component.html',
// })
// export class TerminalComponent {
//   bottom: number = 0;
//   height= '48px'; 
//   private initialY: number = 0;
//   private initialBottom: number = 0;
//   private initialHeight: number = 0;
//   isResizing: boolean = false;

//   constructor(private div:ElementRef) {}
//   getHeight(){
//     return "calc(100% - "+this.bottom+"px)"
//   }
//   getHeightAsNumber(){
//     console.log(this.height.replace("px",""))
//     return Number(this.height.replace("px",""))
//   }
//   startResize(event: MouseEvent | TouchEvent): void {
//     event.preventDefault();
//     this.isResizing = true;
//     this.initialY = this.getClientY(event);
//     this.initialBottom = this.bottom;
//     // this.initialHeight = this.height;
//   }

//   resize(event: MouseEvent | TouchEvent): void {
//     if (this.isResizing) {
//       event.preventDefault();
//       const currentY = this.getClientY(event);
//       const deltaY = (currentY - this.initialY)/5;
//       console.log(this.div.nativeElement) 
//       if(this.getHeightAsNumber()-deltaY>window.innerHeight-80) return;
//       this.bottom -=deltaY;
//       this.height = this.getHeight();
//       if (this.getHeightAsNumber() < 48) this.height = '48px';

//       if (this.bottom < 0) this.bottom = 0;
//     }
//   }

//   stopResize(event: MouseEvent | TouchEvent): void {
//     if (this.isResizing) {
//       event.preventDefault();
//       this.isResizing = false;
//     }
//   }

//   @HostListener('document:mouseup', ['$event'])
//   onDocumentMouseUp(event: MouseEvent): void {
//     this.stopResize(event);
//   }

//   @HostListener('document:touchend', ['$event'])
//   onDocumentTouchEnd(event: TouchEvent): void {
//     this.stopResize(event);
//   }

//   private getClientY(event: MouseEvent | TouchEvent): number {
//     if (event instanceof MouseEvent) {
//       return event.clientY;
//     } else if (event instanceof TouchEvent) {
//       return event.touches[0].clientY;
//     }
//     return 0;
//   }
// }

import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [],
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'], 
})
export class TerminalComponent {
  height: number = 48; 
  private initialY: number = 0;
  private initialHeight: number = 0;
  isResizing: boolean = false;

  constructor() {}

  getHeight(): string {
    return this.height + 'px';
  }

  startResize(event: MouseEvent | TouchEvent): void {
    event.preventDefault();
    this.isResizing = true;
    this.initialY = this.getClientY(event);
    this.initialHeight = this.height;
  }

  resize(event: MouseEvent | TouchEvent): void {
    if (this.isResizing) {
      event.preventDefault();
      const currentY = this.getClientY(event);
      const deltaY = this.initialY - currentY;
      const newHeight = this.initialHeight + deltaY;

      if (newHeight >= 48 && newHeight <= window.innerHeight - 80) {
        this.height = newHeight;
      }
    }
  }

  stopResize(event: MouseEvent | TouchEvent): void {
    if (this.isResizing) {
      event.preventDefault();
      this.isResizing = false;
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onDocumentMouseUp(event: MouseEvent): void {
    this.stopResize(event);
  }

  @HostListener('document:touchend', ['$event'])
  onDocumentTouchEnd(event: TouchEvent): void {
    this.stopResize(event);
  }

  private getClientY(event: MouseEvent | TouchEvent): number {
    if (event instanceof MouseEvent) {
      return event.clientY;
    } else if (event instanceof TouchEvent) {
      return event.touches[0].clientY;
    }
    return 0;
  }
}

