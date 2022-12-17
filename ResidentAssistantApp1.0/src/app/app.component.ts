import { Component } from '@angular/core';
import { RouterEvent, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { SignInService } from './sign-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private signInSubscription = Subscription.EMPTY;
  public signedIn: boolean = false;
  constructor(private signInService: SignInService) {}
  title = 'RA APP';
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
