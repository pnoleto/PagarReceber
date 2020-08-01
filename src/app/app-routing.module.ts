import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent, HomeComponent, AgrupamentosComponent} from '../app/pages/index';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'agrupamentos', component: AgrupamentosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
