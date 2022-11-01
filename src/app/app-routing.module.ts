import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './budget/budget.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ViewUserComponent} from './view-user/view-user.component';


const routes: Routes = [
  // {path: "", component:HomeComponent},
  {path:"budget", component:BudgetComponent, title:"Budget App"},
  {path:"", component:SignupComponent, title:"signup"},
  {path:"login", component:SigninComponent, title:"login"},
  {path:"list", children:[
  {path:"", component:ExpenseListComponent, title:"expense list"},
  {path:":id", component:ViewUserComponent, title:"view user"}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
