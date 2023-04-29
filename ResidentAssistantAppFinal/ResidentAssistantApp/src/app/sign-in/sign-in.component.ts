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

  // Sign in username and password
  username = "";
  password = "";
  rememberMe = false;

  constructor(private signInService: SignInService, private router: Router) { }

  ngOnInit(): void {
  }

  // After sign in is authorized it will take you to the home page of the app
  onSubmit(): void {
    this.signInService.$signedIn.next(true);
    this.router.navigateByUrl('/home');
  }
}
