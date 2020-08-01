import { Component, OnInit } from '@angular/core';
import { OauthService } from '../../services/Oauth/oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public constructor(
    private oauthService: OauthService
  ) { }

  public ngOnInit(): void { }

  public LoginFacebook() {
    this.oauthService.SignInWithFaceBook();
  }

  public LoginAmazon() {
    this.oauthService.SignInWithAmazon();
  }

  public LoginGoogle() {
    this.oauthService.SignInWithGoogle();
  }

}
