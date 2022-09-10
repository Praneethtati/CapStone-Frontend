import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(private userservice:RegisterService, private router:Router,private route:ActivatedRoute) { }
  id!:number;
  user:User=new User();
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.user=new User();
    this.userservice.userById(this.id).subscribe((data:any)=>{
      console.log(data)
      this.user=data;
    },(error:any)=>console.log(error));
  }
 
  updateUser(){
    this.userservice.userUpdate(this.user).subscribe((data:any)=>{
      console.log(data);
      alert("Successfully Updated");
      this.router.navigate(['/getallusers']);
    },(error:any)=>console.log(error));

    }

    userUpdate(){
      this.updateUser();
    }
  }
  


