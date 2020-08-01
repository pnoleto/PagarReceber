import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import {
  HomeComponent, LoginComponent,
  MenuComponent, AgrupamentosComponent, 
  BreadcrumbComponent, PageTitleComponent
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

import { CanActivateService, OauthService } from '../app/services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    AgrupamentosComponent,
    BreadcrumbComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    ReactiveFormsModule
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
