import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username !: String;
  // To take username from login component we need to use ActivatedRoute
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['name']);
    this.username = this.route.snapshot.params['name'];
    this.route.snapshot.params['name'];
  }

}
