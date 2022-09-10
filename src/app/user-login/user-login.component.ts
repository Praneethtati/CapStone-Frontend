import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userl:User=new User();

  constructor(private userservice:RegisterService, private route:Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.userl)
    this.userservice.userLogin(this.userl).subscribe(data=>{
      alert("Successfully logged in");
      this.userservice.navigateHome();
    }
      ,error=>alert("Error Occured"));
      
    }

    reg(){
      console.log("This is user register");
      this.route.navigate(['/UserRegister']);
    }
  }


