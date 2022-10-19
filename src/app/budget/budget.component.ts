import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  public walletAmount:number = 0;
  public wallAmt: number = 0;
  public amt:string = "";
  public expense:string = ""
  public expenseAmount:any = 0
  public newBal:number = 0
  public expAmt:number = 0
  public expArray:any = [];
  public expenseTotal:number=0;
  public expens:any = {}
  public index:any=null;

  constructor() { }

  ngOnInit(): void {
    this.expArray = JSON.parse(localStorage["expenses"])
    this.wallAmt = JSON.parse(localStorage["amount"]);
    for(let i=0;i<this.expArray.length;i++){
      this.expenseTotal+=this.expArray[i].expenseAmount;
    }
    this.newBal=this.wallAmt-this.expenseTotal;
  }
  updateWallet(){
    this.wallAmt += this.walletAmount;
    this.newBal += this.walletAmount
    localStorage.setItem("amount", JSON.stringify(this.wallAmt))   
    
  }

  saveExpense(){
    if (this.wallAmt < this.expenseAmount) {
      alert("Kindly Update Wallet")
    }else{

      if ( this.expense=="" || this.expenseAmount=="") {
        alert("input details")
      }else{
        this.expenseTotal+=this.expenseAmount
        this.expArray.push({expense:this.expense, expenseAmount:this.expenseAmount}) 
        this.newBal -=this.expenseAmount
        localStorage.setItem("expenses", JSON.stringify(this.expArray))
      this.expense="";
      this.expenseAmount="";
      alert("Expense Added Successfully")
      
        
     }
    }
  }

  
}
