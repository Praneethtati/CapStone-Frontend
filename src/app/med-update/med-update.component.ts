import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddmedicineService } from '../addmedicine.service';
import { MedAddComponent } from '../med-add/med-add.component';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-med-update',
  templateUrl: './med-update.component.html',
  styleUrls: ['./med-update.component.css']
})
export class MedUpdateComponent implements OnInit {

  constructor(private medservice:AddmedicineService,private router:Router,private route:ActivatedRoute) { }

  id!:number;
  medicine:Medicine=new Medicine();
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.medicine=new Medicine();
    this.medservice.medicineById(this.id).subscribe((data:any)=>{
      console.log(data);
      this.medicine=data;
    },(error:any)=>console.log(error));
    
  }

  UpdateMed(){
    this.medservice.medicineUpdate(this.medicine).subscribe((data:any)=>{
      console.log(data);
      alert("Update Successful");
      this.router.navigate(['/getallmedicines']);
    },(error:any)=>console.log(error))

  }

}
