import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddmedicineService } from '../addmedicine.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-med-category',
  templateUrl: './med-category.component.html',
  styleUrls: ['./med-category.component.css']
})
export class MedCategoryComponent implements OnInit {

  constructor(private router:Router,private medservice:AddmedicineService) { }
  
  medicineName:any;
  findByMedicineName(){
    this.router.navigate(['findMedicineByName', this.medicineName]);
  }
  ngOnInit(): void {
    this.med();
  }

  medicine:Medicine[]=[];

  med(){
    this.medservice.medicinedisplay().subscribe((Response)=>{
      this.medicine=Response;
    },(error=>{

    }));
    
  }

  paynow(id:number){
    this.router.navigate(['payment',id]);

  };

}
