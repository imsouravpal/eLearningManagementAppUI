import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public username : string | any;
  public isUserLoggedIn : boolean = false;
  public companyCode : string | any;

  constructor(
    private hardcodedAuthenticationService : HardcodedAuthenticationService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  onSearch(code : string) {
    this.companyCode = code;
    this.router.navigate(['companydetails', this.companyCode]);
    this.onSearchClear();
  }

  onSearchClear() {
    this.companyCode = '';
  }

  logout() {
    this.isUserLoggedIn = false;
    this.router.navigate(['logout']);
  }

  homeButton() {
    this.router.navigate(['viewallcourse']);
  }

}
