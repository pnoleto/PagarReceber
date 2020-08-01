import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  HomeComponent, LoginComponent,
  MenuComponent, AgrupamentosComponent
} from './pages';

import {
  SocialLoginModule,
  SocialAuthServiceConfig
} from 'angularx-social-login';

import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';

import { OauthService } from './services/Oauth/oauth.service';
import { CanActivateService } from '../app/services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    AgrupamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
    OauthService,
    CanActivateService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID, provider: new FacebookLoginProvider('912546562568332'),
          },
          /*{
            id: GoogleLoginProvider.PROVIDER_ID, provider: new GoogleLoginProvider('clientId'),
          },
          {
            id: AmazonLoginProvider.PROVIDER_ID, provider: new AmazonLoginProvider('clientId'),
          }*/,
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
