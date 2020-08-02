import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LoginComponent, HomeComponent,
  AgrupamentosComponent, CarteirasComponent
} from '../app/pages/index';

import { CanActivateService } from './services';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'agrupamentos', component: AgrupamentosComponent, canActivate: [CanActivateService] },
  { path: 'carteiras', component: CarteirasComponent, canActivate: [CanActivateService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
