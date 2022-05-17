import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'users', component:UserListComponent },
  { path: 'register', component:RegisterFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
