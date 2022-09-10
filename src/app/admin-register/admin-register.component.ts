import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  constructor(private adminservice:AdminserviceService) { }

  admin:Admin=new Admin();

  ngOnInit(): void {
  }

  adminReg()
  {
    console.log(this.admin);
    this.adminservice.registerAdmin(this.admin).subscribe(data=>{
      alert("Admin successfully registered");
      this.adminservice.navigateAdminLogin();
    },
    error=>alert("Error Occured"));
  }

  login()
  {
   this.adminservice.navigateAdminLogin();
    
  }


}
