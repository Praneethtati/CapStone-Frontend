import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer, retry } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
    private baseUrl="http://localhost:8081/api/user/";
  constructor(private httpClient:HttpClient,private route:Router) { }

  registerUser(user:User):Observable<object>{
    console.log(user);
    let url=this.baseUrl+"user";
    return this.httpClient.post(url,user);
  }

  userDisplay():Observable<User[]>{
    let url=this.baseUrl+"getallusers";
    return this.httpClient.get<User[]>(url);
  }
  
  userDelete(id:number)
  {
    let url=this.baseUrl+"UserDelete/"+id;
    return this.httpClient.delete(url).subscribe(data=>{
      return this.userDisplay();
  });
  }

  userUpdate(user:User):Observable<Object>
  {
    let url=this.baseUrl+"updateuser";
    return this.httpClient.put(url,user);
  }

  userById(id:number):Observable<Object>
  {
    let url=this.baseUrl+"getuserby/"+id;
    return this.httpClient.get(url);
  }

  userLogin(user:User):Observable<Object>
  {
    let url=this.baseUrl+"login";
    return this.httpClient.post(url,user);
  }

  navigateLogin(){
    console.log("in the login page");
    this.route.navigate(['/UserLogin']);
    console.log("in the login page");

  }

  navigateHome() {
    this.route.navigate(['/menu']);
  }
  navigateReg(){
    this.route.navigate(['/UserRegister']);
  }
}
