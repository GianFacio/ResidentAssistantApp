import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
;

import { SignInService } from './../sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username = "";
  password = "";
  rememberMe = false;

  constructor(private signInService: SignInService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.signInService.$signedIn.next(true);
    this.router.navigateByUrl('/home');
   // alert(`Email: ${this.emailAddress}\nPassword: ${this.password}\nRemember Me ${this.rememberMe}`);
  }
}
