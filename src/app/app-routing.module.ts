import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { CompanyComponent } from './company/company.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ModifycompanyComponent } from './modifycompany/modifycompany.component';
import { RouteGuardService } from './service/route-guard.service';
import { SignupComponent } from './signup/signup.component';
import { UdpagesComponent } from './udpages/udpages.component';
import { ViewallcompanyComponent } from './viewallcompany/viewallcompany.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'viewallcourse', component: ViewallcompanyComponent, canActivate: [RouteGuardService]},
  {path: 'register', component: AddcompanyComponent, canActivate: [RouteGuardService]},
  {path: 'modifycompany', component: ModifycompanyComponent, canActivate: [RouteGuardService]},
  {path: 'coursedetails/:id', component: CompanydetailsComponent, canActivate: [RouteGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: 'udpages', component: UdpagesComponent, canActivate: [RouteGuardService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
