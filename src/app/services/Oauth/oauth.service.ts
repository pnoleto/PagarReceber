import { Injectable } from '@angular/core';
import {
  SocialAuthService, GoogleLoginProvider,
  AmazonLoginProvider, FacebookLoginProvider, SocialUser
} from 'angularx-social-login';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class OauthService {

  private user: SocialUser;

  constructor(
    private authService: SocialAuthService,
    private route: Router
  ) { }

  public Authenticated(): boolean {
    return (this.user != null);
  }

  public GetUserInfo(): SocialUser {
    return this.user;
  }

  public SignInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => { this.user = user; })
      .then(() => this.AbrirPaginaInicial());
  }

  public SignInWithAmazon(): void {
    this.authService.signIn(AmazonLoginProvider.PROVIDER_ID)
      .then((user) => { this.user = user; })
      .then(() => this.AbrirPaginaInicial());
  }

  public SignInWithFaceBook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((user) => { this.user = user; })
      .then(() => this.AbrirPaginaInicial());
  }

  public LogOut(): void {
    this.authService.signOut();
  }

  public AbrirPaginaInicial() {
    this.route.navigate(['home']);
  }

}
