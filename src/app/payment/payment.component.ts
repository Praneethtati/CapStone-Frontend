import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddmedicineService } from '../addmedicine.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  id:number;
  quant:number=1;
  price:number;
  med:Medicine=new Medicine();
  constructor(private router:Router,private route:ActivatedRoute,private medservice:AddmedicineService) { }
  medicine:Medicine=new Medicine();
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.medicine=new Medicine();
    this.medservice.medicineById(this.id).subscribe((data:any)=>{
      console.log(data);
      data.quantity=data.quantity-this.quant;
      this.medicine=data;
      this.price=data.mrp;
    },(error:any)=>console.log(error));
    console.log(this.medicine);
  }

  myClickFunction(){
    alert("Thank You For The Payment of "+this.price*this.quant);
    this.router.navigate(['menu']);
  }
}
