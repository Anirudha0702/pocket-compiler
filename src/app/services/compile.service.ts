import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompileService {
  base_url:string ;
  
  constructor(private http:HttpClient) {
    this.base_url = "http://localhost:3000/";

  }
  compileJava(data:{code:string,input:Array<any>}){
    return this.http.post(this.base_url+"compile/java",data)
  }
  compilePython(data:{code:string,input:Array<any>}){
    return this.http.post(this.base_url+"compile/python",data)
  }
  compileC(data:{code:string,input:Array<any>}){
    return this.http.post(this.base_url+"compile/c",data)
  }
  compileCpp(data:{code:string,input:Array<any>}){
    return this.http.post(this.base_url+"compile/cpp",data)
  }
  compileJs(data:{code:string,input:Array<any>}){
    return this.http.post(this.base_url+"compile/js",data)
  }
}
