import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
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
    for(let i=0;i<this.expArray.length;i++){
      this.expenseTotal+=this.expArray[i].expenseAmount;
    }
    
  }
  getUser(id:any){
    this.index=id;
    this.expens = this.expArray.find((item:any, index:any)=>index==id)
    this.expense=this.expens.expense;
    this.expenseAmount=this.expens.expenseAmount;
   

  }

  delete(id:any){
    this.expenseTotal-=this.expArray[id].expenseAmount;
    this.expenseTotal+=this.expenseAmount
    this.expArray= this.expArray.filter((item:any, index:any)=>index!=id)  
    localStorage.setItem("expenses", JSON.stringify(this.expArray))  
  }

  edit(){
    this.expenseTotal-=this.expArray[this.index].expenseAmount;
    this.expenseTotal+=this.expenseAmount;
    this.newBal+= this.expArray[this.index].expenseAmount; 
    this.newBal-= this.expenseAmount; 
    this.expArray[this.index]={expense:this.expense, expenseAmount:this.expenseAmount}
    localStorage.setItem("expenses", JSON.stringify(this.expArray))
    this.expense=""
    this.expenseAmount=""
  }

}
