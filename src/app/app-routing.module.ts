import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { StarWarsPlanetsComponent } from './components/star-wars-planets/star-wars-planets.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/login' },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "planets/:token", component: StarWarsPlanetsComponent },
  { path: "**", redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
