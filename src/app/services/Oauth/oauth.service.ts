import { Injectable } from '@angular/core';
import { IOauth } from '../../domain/interfaces';
import {
  SocialAuthService, GoogleLoginProvider,
  AmazonLoginProvider, FacebookLoginProvider, SocialUser
} from 'angularx-social-login';
import { UserInfo } from '../../classes';

@Injectable({
  providedIn: 'root',
})
export class OauthService implements IOauth {

  private user: UserInfo;

  constructor(
    private authService: SocialAuthService
  ) {
    this.user = JSON.parse(sessionStorage.getItem("UserSession"));
  }

  public Authenticated(): boolean {
    return (this.user != null);
  }

  public GetUserInfo(): UserInfo {
    return this.user;
  }

  public async SignInWithGoogle(): Promise<SocialUser> {
    const user = await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    sessionStorage.setItem("UserSession", JSON.stringify(user));
    this.user = user;

    return user;
  }

  public async SignInWithAmazon(): Promise<any> {
    const user = await this.authService.signIn(AmazonLoginProvider.PROVIDER_ID);
    sessionStorage.setItem("UserSession", JSON.stringify(user));
    this.user = user;

    return user;
  }

  public async SignInWithFaceBook(): Promise<any> {
    const user = await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    sessionStorage.setItem("UserSession", JSON.stringify(user));
    this.user = user;

    return user;
  }

  public async LogOut(): Promise<any> {
    const logOutInfo = await this.authService.signOut();
    sessionStorage.clear();
    return logOutInfo;
  }

}
