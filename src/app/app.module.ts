import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { UserLoginComponent } from './user-login/user-login.component';

import { HeaderComponent } from './header/header.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserGetallComponent } from './user-getall/user-getall.component';
import { MedAddComponent } from './med-add/med-add.component';
import { MedGetallComponent } from './med-getall/med-getall.component';
import { MedUpdateComponent } from './med-update/med-update.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FindMedicineComponent } from './find-medicine/find-medicine.component';
import { PaymentComponent } from './payment/payment.component';
import { MedCategoryComponent } from './med-category/med-category.component';

@NgModule({
  declarations: [
    AppComponent,
    
    UserLoginComponent,
    
    HeaderComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    UserRegisterComponent,
    UserUpdateComponent,
    UserGetallComponent,
    MedAddComponent,
    MedGetallComponent,
    MedUpdateComponent,
    ContactComponent,
    AboutComponent,
    FindMedicineComponent,
    PaymentComponent,
    MedCategoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
