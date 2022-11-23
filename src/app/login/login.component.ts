import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username : String | any;
  public password : String | any;
  public errorMessage!: String;
  public isValid!: boolean;

  constructor(private router : Router, 
    private hardcodedAuthenticationService : HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.minLength(8))
  });

  handleLogin() {
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      console.log("Inside if() ... ");
      this.router.navigate(['viewallcourse']);
      this.isValid = false;
    } else {
      this.isValid = true;
    }
    console.log("Log in button clicked!", this.username);
  }

}
