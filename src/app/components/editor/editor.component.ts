import { Component } from '@angular/core';
import { TerminalComponent } from '../terminal/terminal.component';
import { CompileService } from '../../services/compile.service';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [TerminalComponent,FormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  code:string;
  constructor(private compile:CompileService){
    this.code = ""
  }
  compileJava(){
    this.compile.compileJava({code:this.code}).subscribe((data:any)=>{
      console.log(data)
    })
  }

}
