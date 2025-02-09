import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
})
export class TerminalComponent {
  height: number = 48;
  private initialY: number = 0;
  private initialHeight: number = 0;
  isResizing: boolean = false;
  input: string = '';
  currentTab: string = 'input';

  @Output() inputEmitter = new EventEmitter<string>();

  getHeight(): string {
    return this.height + 'px';
  }

  sendInput(): void {
    this.inputEmitter.emit(this.input);
  }

  changeTab(tab: string): void {
    this.currentTab = tab;
    console.log(this.currentTab);
  }

  startResize(event: MouseEvent | TouchEvent): void {
    event.preventDefault();
    this.isResizing = true;
    this.initialY = this.getClientY(event);
    this.initialHeight = this.height;
  }

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  resize(event: MouseEvent | TouchEvent): void {
    if (!this.isResizing) return;
    event.preventDefault();
    const currentY = this.getClientY(event);
    const deltaY = this.initialY - currentY;
    const newHeight = this.initialHeight + deltaY;

    // Ensure terminal height remains within limits
    if (newHeight >= 48 && newHeight <= window.innerHeight - 80) {
      this.height = newHeight;
    }
  }

  stopResize(): void {
    this.isResizing = false;
  }

  @HostListener('document:mouseup')
  @HostListener('document:touchend')
  onDocumentMouseUp(): void {
    this.stopResize();
  }

  private getClientY(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
  }
}
