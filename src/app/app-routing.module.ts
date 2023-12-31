import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:'users', component:UserListComponent},
{path:'create-user',component:CreateUserComponent},
{path:'',redirectTo:'users',pathMatch:'full'},
{path:'update-user/:user_id',component:UpdateUserComponent},
{path:'user-details/:user_id',component:UserDetailsComponent},
{path:'home',component:HomeComponent},
{path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
