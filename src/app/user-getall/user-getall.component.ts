import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-user-getall',
  templateUrl: './user-getall.component.html',
  styleUrls: ['./user-getall.component.css']
})
export class UserGetallComponent implements OnInit {

  constructor(private userservice:RegisterService,private route:Router) { }

  user:User[]=[];
  ngOnInit(): void {
    this.getallusers();
    
  }

  getallusers(){
    this.userservice.userDisplay().subscribe(result=>this.user=result);
  }

  Delete(id:number)
  {
    this.userservice.userDelete(id);
    alert(id+" got deleted");

  }

  Update(id:number){
    this.route.navigate(['updateUser', id]);
  }

  adduser(){
    this.route.navigate(['/UserRegister']);
  }

  getallmed(){
    this.route.navigate(['/getallmedicines']);
  }
}
