import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LoginComponent, HomeComponent,
  AgrupamentosComponent, CarteirasComponent,
  MovimentosComponent
} from '../app/pages';

import { CanActivateService } from './services';


const routes: Routes = [
  { path: '', component: HomeComponent }
  , { path: 'login', component: LoginComponent }
  , { path: 'agrupamentos', component: AgrupamentosComponent, canActivate: [CanActivateService] }
  , { path: 'carteiras', component: CarteirasComponent, canActivate: [CanActivateService] }
  , { path: 'movimentos', component: MovimentosComponent, canActivate: [CanActivateService] }
  , { path: 'movimentos', component: MovimentosComponent, canActivate: [CanActivateService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
