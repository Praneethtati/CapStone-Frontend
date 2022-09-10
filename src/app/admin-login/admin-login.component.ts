import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminservice:AdminserviceService, private router:Router) { }

  admin:Admin=new Admin();
  ngOnInit(): void {
  }


  adminlogin()
  {
    console.log(this.admin);
    this.adminservice.loginAdmin(this.admin).subscribe(data=>{
      alert("successfully Logged In");
      this.adminservice.navigateHome();
    },
    error=>alert("Error Occured"));

  }


  reg()
  {
    this.router.navigate(['/AdminRegister']);

  }
  
}
