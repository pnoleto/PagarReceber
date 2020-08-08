import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DevExtremeModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';

import {
  HomeComponent, LoginComponent,
  MenuComponent, AgrupamentosComponent,
  BreadcrumbComponent, PageTitleComponent,
  CarteirasComponent, DeashboardComponent,
  MovimentosComponent,
  MovimentacoesComponent
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

import {
  CanActivateService,
  OauthService
} from '../app/services';
import { environment } from '../environments/environment';
import { LoadingComponent } from './pages/components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    AgrupamentosComponent,
    BreadcrumbComponent,
    PageTitleComponent,
    CarteirasComponent,
    DeashboardComponent,
    MovimentosComponent,
    MovimentacoesComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    ReactiveFormsModule,
    DevExtremeModule,
    HttpClientModule
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
            id: FacebookLoginProvider.PROVIDER_ID, provider: new FacebookLoginProvider(environment.LoginOptions.FacebookID),
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
