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

  public SignInWithGoogle(): Promise<any> {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => { this.user = user; })
  }

  public SignInWithAmazon(): Promise<any> {
    return this.authService.signIn(AmazonLoginProvider.PROVIDER_ID)
      .then((user) => { this.user = user; })
  }

  public SignInWithFaceBook(): Promise<any> {
    return this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((user) => { this.user = user; })
  }

  public LogOut(): Promise<any> {
    return this.authService.signOut();
  }

}
