import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ViewcarComponent } from './viewcar/viewcar.component';


const routes: Routes = [
  // {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserComponent},
  {path:'home',component:HomeComponent},
  {path:'car',component:CarComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'viewcar',component:ViewcarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

