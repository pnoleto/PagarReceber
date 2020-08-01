import { Injectable } from '@angular/core';
import {
  SocialAuthService, GoogleLoginProvider,
  AmazonLoginProvider, FacebookLoginProvider, SocialUser
} from 'angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class OauthService {

  private user: SocialUser;

  constructor(
    private authService: SocialAuthService
  ) { }

  public Authenticated(): boolean {
    return (this.user != null);
  }

  public GetUserInfo(): SocialUser {
    return this.user;
  }

  public SignInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => { this.user = user; });
  }

  public SignInWithAmazon(): void {
    this.authService.signIn(AmazonLoginProvider.PROVIDER_ID)
      .then((user) => { this.user = user; });
  }

  public SignInWithFaceBook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((user) => { this.user = user; });
  }

  public LogOut(): void {
    this.authService.signOut();
  }

}
