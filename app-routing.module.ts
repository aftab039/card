import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { EmployeesService } from 'src/service/employees.service';
import { AppAbout } from './About/app.About';
import { AppComponent } from './app.component';
import { AppContact } from './Contact/app.Contact';
import { AppHome } from './Home/app.Home';
import { Apppagenotfound } from './Pagenotfound/app.pagenotfound';
import { AppPortfolio } from './Portfolio/app.Portfolio';
import { Appproduct } from './product/app.product';
import { AppServices } from './Serivces/app.Services';
import {CardsServices} from 'src/service/employees.service';


const routes: Routes = [
  {
    path:'', redirectTo:'/services',pathMatch:'full'
    },

  {path:"home", component:AppHome},
  {path:"product", component:Appproduct},
  {path:"services", component:AppServices},
  {path:"portfolio", component:AppPortfolio},
  {path:"about", component:AppAbout},
  {path:"contact", component:AppContact},
  {path:'**',component:Apppagenotfound},
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
