import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditorComponent } from './components/editor/editor.component';
import { FilesComponent } from './components/files/files.component';
import { Subscription } from 'rxjs';
import { SocketService } from './services/socket.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    EditorComponent,
    FilesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnDestroy {
  title = 'pocket-compiler';
  show: boolean;
  private messageSubscription: Subscription;
  messages: string[] = [];
  newMessage: string = '';

  constructor(private socketService: SocketService) {
    this.show = false;
    this.messageSubscription = this.socketService
      .on('message')
      .subscribe((data) => {
        this.messages.push(data.text);
      });
  }
  showFileStructure(event: boolean) {
    this.show = event;
  }
  sendMessage() {
    this.socketService.emit('execute',  "def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n\n# Example usage:\narray = [5, 1,  8]\nbubble_sort(array)\nprint('Sorted array:', array)\n" );
    this.newMessage = '';
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }
}
