import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

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
  public expens:any = {};
  public user:any = {};

  public date:any = ""
  public index:any=null;
  public index2:any=null;
  constructor(
    public userService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.expArray = this.userService.GetAllCurrentUserExpense();
    this.expenseTotal = this.userService.getExpensesTotal();
    this.user=this.userService.HandleCurrentuser();
  };

  getUser(id:any,i:any){
    this.index=id;
    this.index2=i;
    this.expens = this.expArray.find((item:any, index:any)=>index==i);
    this.expense=this.expens.expense;
    this.expenseAmount=this.expens.expenseAmount;
  }

  delete(id:any){
    let found=this.expArray.find((exp:any)=>exp.id==id);
    this.expenseTotal-=found.expenseAmount;
    this.expArray=this.expArray.filter((exp:any)=>exp.id!=id)
    this.userService.DeleteExpense(id)
  }

  edit(){
    if(this.user.walletAmount < this.expenseAmount){
      alert("kindly update wallet")
    }else{
      this.expenseTotal-=this.expArray[this.index2].expenseAmount;
      this.expenseTotal+=this.expenseAmount;
      let form={
        expenseAmount:this.expenseAmount,
        expense:this.expense,
        id:this.expArray[this.index2].id,
        date:this.expArray[this.index2].date,
        creator:this.expArray[this.index2].creator,
    }
      this.expArray[this.index2]=form;
      this.userService.HandleEdit(this.index,form);
    }
  }
}
