import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddmedicineService } from '../addmedicine.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-med-add',
  templateUrl: './med-add.component.html',
  styleUrls: ['./med-add.component.css']
})
export class MedAddComponent implements OnInit {

  constructor(private medicineservice:AddmedicineService,private route:Router) { }

  ngOnInit(): void {
  }
  medicine:Medicine=new Medicine();

  medReg(){
     this.medicineservice.addMedicine(this.medicine).subscribe(data=>{
      alert("successfully added");
      this.route.navigate(['/getallmedicines']);
     },
     error=>alert("Error Occured"));
  }
}
