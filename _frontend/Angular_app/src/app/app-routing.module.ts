import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/Admin/business/business.component';
import {BoothComponent} from './components/Admin/booth/booth.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login_register/login.component';
import { ApproveComponent } from './components/Admin/approve/approve.component';
import { AdminComponent } from './components/Admin/admin/admin.component';
import { RegistrationComponent } from './components/Admin/registration/registration.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'admin/business',component: BusinessComponent},
  {path:'admin/booth',component: BoothComponent},
  {path:'admin/approve',component: ApproveComponent},
  {path:'admin/admin',component: AdminComponent},
  {path: 'admin/registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
