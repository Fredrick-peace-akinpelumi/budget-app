import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './budget/budget.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';


const routes: Routes = [
  // {path: "", component:HomeComponent},
  {path:"", component:BudgetComponent, title:"Budget App"},
  {path:"list", component:ExpenseListComponent, title:"expence list"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
