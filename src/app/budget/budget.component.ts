import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  public walletAmount:string = "";
  public wallAmt: number = 0;
  public amt:string = "";
  public expense:string = ""
  public expenseAmount:any = 0
  public newBal:number = 0
  public expAmt:number = 0
  public expArray:any = [];
  public expenseTotal:number=0;
  public date:any= ""
  public month:any = ""
  public year:any = ""
  public sec:any = ""
  public min:any =""
  public hr:any = ""
  public index:any=null;
  public allUser:any = []
  public user:any = {}
  public email: any = ""
  public userIndex:any = ""

  constructor(
    public router: Router,
    public userService : UserServiceService
    ) { }

    ngOnInit(): void {
    // this.expArray = this.userService.getExpenses()
    // this.wallAmt = this.userService.getAmount()
    // this.allUser  = this.userService.getUsers()
    // this.email = this.userService.getLoginUser()
    // this.userIndex = this.allUser.findIndex((user:any, i:any)=>user.email==this.email)



    // let found = this.allUser.find((user:any, i:any)=>user.email==this.email)
    this.user= this.userService.HandleCurrentuser()
    this.wallAmt=this.user.walletAmount;

      this.expenseTotal=this.userService.getExpensesTotal()

  }

  logOut(){
    localStorage.removeItem("email")
    this.router.navigate([""])

  }
  updateWallet(){
    let amt=Number(this.walletAmount);
    let result=this.userService.HandleUpdate(amt);
    this.wallAmt+=amt
    this.newBal +=this.wallAmt
  }

  saveExpense(){
    let getDate= new Date().toISOString();
    this.date = getDate;
    if ( this.expense=="" || this.expenseAmount=="") {
      alert("input details")
    }else{
      if (this.user.walletAmount < (this.expenseAmount +this.expenseTotal)) {
        alert("Kindly Update Wallet")
      }else{
        let result=this.userService.HandleSave({expense:this.expense,expenseAmount:this.expenseAmount,creator:this.user.email, date:this.date})
       this.expenseTotal+=this.expenseAmount;
        if(result){

        }
             this.expense="";
        this.expenseAmount="";
        alert("Expense Added Successfully")
      }
    }
  }


}
