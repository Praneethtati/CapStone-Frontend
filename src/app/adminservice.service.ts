import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private httpclient:HttpClient,private route:Router) { }

  private Adminurl="http://localhost:8081/api/user/";

  registerAdmin(admin:Admin): Observable<Object>
  {
    console.log(this.Adminurl)
    let url=this.Adminurl+"AdminInsert";
    return this.httpclient.post(url,admin);

  }

  loginAdmin(admin:Admin): Observable<Object>
  {

    let url=this.Adminurl+"AdminLogin";
    return this.httpclient.post(url,admin);

  }

  navigateAdminLogin()
  {
    this.route.navigate(['/AdminLogin']);
  }

  navigateHome() 
  {
    this.route.navigate(['/getallmedicines']);
  }
}
