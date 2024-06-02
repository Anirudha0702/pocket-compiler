import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompileService {
  base_url:string ;
  constructor(private http:HttpClient) {
    this.base_url = "http://localhost:3000";

  }
  compileJava(data:{code:string}){
    return this.http.post(this.base_url+"/compiler/java",data)
  }
  compilePython(data:{code:string}){
    return this.http.post(this.base_url+"/compiler/python",data)
  }
  compileC(data:{code:string}){
    return this.http.post(this.base_url+"/compiler/c",data)
  }
  compileCpp(data:{code:string}){
    return this.http.post(this.base_url+"/compiler/cpp",data)
  }
  compileJs(data:{code:string}){
    return this.http.post(this.base_url+"/compiler/js",data)
  }
}
