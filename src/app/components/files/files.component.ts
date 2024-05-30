import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-files',
  standalone: true,
  imports: [],
  templateUrl: './files.component.html',
  styleUrl: './files.component.css',
  animations: [trigger('slider-fade', [
    transition('void => *', [style({ opacity: 0}), animate('0.3s', style({ opacity: 1}))]),
    transition('* => void', [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))]),
  ])]
})
export class FilesComponent {
  files=[
    {name: 'file1', type: 'txt'},
    {name: 'file2', type: 'pdf'},
    {name: 'file3', type: 'docx'},
    {name: 'file4', type: 'txt'},
    {name: 'file5', type: 'pdf'},
    {name: 'file6', type: 'docx'},
    {name: 'file7', type: 'txt'},
    {name: 'file8', type: 'pdf'},
    {name: 'file9', type: 'docx'},
    {name: 'file10', type: 'txt'},
    
  ]
}
