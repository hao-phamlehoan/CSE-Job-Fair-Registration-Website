import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login_register/login.component';
import { BusinessComponent } from './components/Admin/business/business.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/Admin/admin/admin.component';
import { BoothComponent } from './components/Admin/booth/booth.component';
import { ApproveComponent } from './components/Admin/approve/approve.component';
import { RegisterComponent } from './components/register_booth/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BusinessComponent,
    AdminComponent,
    BoothComponent,
    ApproveComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
