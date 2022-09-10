import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private userservice:RegisterService,private route:Router) { }

  user:User=new User();
  ngOnInit(): void {
  }

  userReg(){
    console.log(this.user);
    this.userservice.registerUser(this.user).subscribe(data=>{
      alert("User successfully registered");
      console.log("user login");
      this.route.navigate(['/UserLogin']);
    },
    error=>alert("Error occured"));
  }

  login(){
    this.route.navigate(['/UserLogin'])
  }

  



}
