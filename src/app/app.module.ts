import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BudgetComponent } from './budget/budget.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,

    BudgetComponent,
     ExpenseListComponent,
     ViewUserComponent,
     SignupComponent,
     SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
