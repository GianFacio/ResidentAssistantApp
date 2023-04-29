import { Injectable } from '@angular/core';
import  { Subject } from 'rxjs';

// Console sign in true or false
@Injectable({
  providedIn: 'root'
})
export class SignInService {

  public $signedIn = new Subject<boolean>();

  constructor() { }
}
