import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../service/company.service';
import { NotoficationService } from '../service/notofication.service';
import { Users } from './Users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public userName : String | any;
  public firstName : String | any;
  public lastName : String | any;
  public password : String | any;
  public pswrepeat : String | any;
  public userModel : Users = new Users();
  public errorMessage!: String;
  public alreadyTaken!: boolean;

  constructor(private router : Router,
    public companyService : CompanyService,
    private notificationService : NotoficationService,) { }

  ngOnInit(): void {
  }

  registerUser() {
    if(this.companyService.usersForm.valid) {
      this.userModel = this.companyService.usersForm.value;
      console.log("this.userModel = ", this.userModel);
      this.companyService.registerUser(this.userModel).subscribe(data => {
        this.companyService.usersForm.reset();
        this.companyService.initializeFormGroup();
        this.notificationService.success('Sign Up sucessful. Please LogIn');
        this.router.navigate(['login']);
      });
    }
  }

}
