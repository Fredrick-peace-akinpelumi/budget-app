import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BudgetComponent } from './budget/budget.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';

@NgModule({
  declarations: [
    AppComponent,

    BudgetComponent,
     ExpenseListComponent
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
