import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { ContactComponent } from './contact/contact.component';
import { FindMedicineComponent } from './find-medicine/find-medicine.component';
import { MedAddComponent } from './med-add/med-add.component';
import { MedCategoryComponent } from './med-category/med-category.component';
import { MedGetallComponent } from './med-getall/med-getall.component';
import { MedUpdateComponent } from './med-update/med-update.component';
import { PaymentComponent } from './payment/payment.component';

import { UserGetallComponent } from './user-getall/user-getall.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {"path":"AdminRegister",component:AdminRegisterComponent},
  {"path":"AdminLogin",component:AdminLoginComponent},
  {"path":"UserLogin",component:UserLoginComponent},
  {"path":"UserRegister",component:UserRegisterComponent},
  {"path":"updateUser/:id",component:UserUpdateComponent},
  {"path":"getallusers",component:UserGetallComponent},
  {"path":"getallmedicines",component:MedGetallComponent},
  {"path":"medupdate/:id",component:MedUpdateComponent},
  {"path":"medadd",component:MedAddComponent},
  {"path":"findMedicineByName/:medicineName",component:FindMedicineComponent},
  {"path":"payment/:id",component:PaymentComponent},
  {"path":"about",component:AboutComponent},
  {"path":"contact",component:ContactComponent},
  {"path":"menu",component:MedCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
