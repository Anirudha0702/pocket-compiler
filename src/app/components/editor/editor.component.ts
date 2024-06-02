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
  lang:string
  constructor(private compile:CompileService){
    this.code = "public class Main{\n\tpublic static void main(String[] args){\n\t\tSystem.out.println(\"Pocket Compiler\");\n\t}\n}"
    this.lang = "java"
  }
  langChange(event:Event){
    const selectElement = event.target as HTMLSelectElement;
    this.lang = selectElement.value;
    if(this.lang == "java"){
      this.code = "public class Main{\n\tpublic static void main(String[] args){\n\t\tSystem.out.println(\"Pocket Compiler\");\n\t}\n}"
    }else if(this.lang == "python"){
      this.code = "print(\"Pocket Compiler\")"
    }else if(this.lang == "c"){
      this.code = "#include <stdio.h>\nint main(){\n\tprintf(\"Pocket Compiler\");\n\treturn 0;\n}"
    }
    else if(this.lang == "cpp"){
      this.code = "#include <iostream>\nint main(){\n\tstd::cout<<\"Pocket Compiler\";\n\treturn 0;\n}"
    }
    else if(this.lang == "js"){
      this.code = "console.log(\"Pocket Compiler\")"
    }
  }
  execute(){
    if(this.lang == "java"){
      this.compile.compileJava({code:this.code}).subscribe((data:any)=>{
        console.log(data)
      })
    }else if(this.lang == "python"){
      this.compile.compilePython({code:this.code}).subscribe((data:any)=>{
        console.log(data)
      })
    }else if(this.lang == "c"){
      this.compile.compileC({code:this.code}).subscribe((data:any)=>{
        console.log(data)
      })
    }
    else if(this.lang == "cpp"){
      this.compile.compileCpp({code:this.code}).subscribe((data:any)=>{
        console.log(data)
      })
    }
    else if(this.lang == "js"){
      this.compile.compileJs({code:this.code}).subscribe((data:any)=>{
        console.log(data)
      })
    }
  }

}
