import { Component, OnInit } from '@angular/core';
import { OauthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public constructor(
    private oauthService: OauthService,
    private route: Router
  ) { }

  public ngOnInit(): void { }

  public LoginFacebook() {
    this.oauthService.SignInWithFaceBook()
      .then(() => this.AbrirPaginaInicial());
  }

  public LoginAmazon() {
    this.oauthService.SignInWithAmazon()
      .then(() => this.AbrirPaginaInicial());
  }

  public LoginGoogle() {
    this.oauthService.SignInWithGoogle()
      .then(() => this.AbrirPaginaInicial());
  }

  public AbrirPaginaInicial() {
    this.route.navigate(['home']);
  }

}
