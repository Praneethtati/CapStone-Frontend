import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddmedicineService } from '../addmedicine.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-med-getall',
  templateUrl: './med-getall.component.html',
  styleUrls: ['./med-getall.component.css']
})
export class MedGetallComponent implements OnInit {

  constructor(private medservice:AddmedicineService,private route:Router) { }

  medicine:Medicine[]=[];
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.medservice.medicinedisplay().subscribe(result=>this.medicine=result)
  }

  Delete(id:number){
    this.medservice.medicineDelete(id);
    alert(id+" got deleted");
  }

  Update(id:number){
    this.route.navigate(['medupdate',id]);
  }

  addmed(){
    this.route.navigate(['/medadd']);
  }

  gotousers(){
    this.route.navigate(['getallusers']);
  }
}
