import { TestBed } from '@angular/core/testing';
import { SignInService } from './sign-in.service';

// Sign in service to communicate to the app that a User has logged in
describe('SignInService', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
