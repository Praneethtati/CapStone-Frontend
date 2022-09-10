import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string="Welcome to Medicare";
  constructor(private router:Router) { }
  medicineName:any;
  ngOnInit(): void {
  }
  findByMedicineName(){
    this.router.navigate(['findMedicineByName',this.medicineName]);
  }

}
