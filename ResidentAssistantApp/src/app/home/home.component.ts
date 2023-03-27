import { Component, OnInit } from '@angular/core';
import { RouterEvent, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private signInSubscription = Subscription.EMPTY;
  public signedIn: boolean = false;
  constructor(private signInService: SignInService, private router: Router ) {}

  ngOnInit() {
    this.signInSubscription = this.signInService.$signedIn.subscribe(
      (signedIn: boolean) => {
        this.signedIn = signedIn;
        console.log('Sign in event', this.signedIn);
      });
    }

    signOut() {
      this.signInService.$signedIn.next(false);

    }

}
