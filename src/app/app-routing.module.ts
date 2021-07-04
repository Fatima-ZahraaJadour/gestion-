import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './components/navbar/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {GestionComponent} from './components/navbar/gestion/gestion.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: NavbarComponent,
  children: [
    {path: '', component: HomeComponent },
    {path: 'gestion', component: GestionComponent}]}
];



@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
