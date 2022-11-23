import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    // console.log("Before : ", this.isUserLoggedIn());
    if(username==="sourav" && password==="Apple1") {
      sessionStorage.setItem('authenticateUser', username);
      // console.log("After : ", this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticateUser');
  }
}
