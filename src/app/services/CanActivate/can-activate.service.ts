import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OauthService } from '../Oauth/oauth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate {

  constructor(
    private oauthService: OauthService,
    private router: Router
  ) { }

  public canActivate(): boolean {
    let canActive: boolean = this.oauthService.Authenticated();

    if (!canActive)
      this.router.navigate(['login']);

    return canActive;
  }

}
