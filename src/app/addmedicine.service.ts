import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';


@Injectable({
  providedIn: 'root'
})
export class AddmedicineService {

  private baseUrl="http://localhost:8081";
  constructor(private httpclient:HttpClient) { }
  medicine:Medicine=new Medicine();
  addMedicine(med:Medicine):Observable<object>{
    console.log(med);
    let url=this.baseUrl+"/api/user/addMedicine";
    return this.httpclient.post(url,med);
  }

  medicinedisplay():Observable<Medicine[]>{
    
    let url=this.baseUrl+"/api/user/Getallmedicines";
    return this.httpclient.get<Medicine[]>(url);
  }

  medicineDelete(id:number)
  {
    let url=this.baseUrl+"/api/user/MedDelete/"+id;
    return this.httpclient.delete(url).subscribe(data=>{
      return this.medicinedisplay();
  });
  }


  medicineUpdate(med:Medicine):Observable<Object>
  {
    let url=this.baseUrl+"/api/user/UpdateMed";
    return this.httpclient.put(url,med);
  }

  medicineById(id:number):Observable<Object>
  {
    let url=this.baseUrl+"/api/user/MedById/"+id;
    return this.httpclient.get(url);
  }

  medicineByName(name:string):Observable<Object>{
    let url=this.baseUrl+"/api/user/MedByName/"+name;
    return this.httpclient.get(url);
  }

}
