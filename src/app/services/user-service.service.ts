import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  public currentUser:any={};

  getUsers(){
    if(localStorage["allUsers"]){
      return JSON.parse(localStorage["allUsers"])
    }else{
      return []
    }
  }
  getExpensesTotal():number{
    let expens=0;
    for(let i=0; i<this.GetAllCurrentUserExpense().length;i++){
      expens+=this.GetAllCurrentUserExpense()[i].expenseAmount;
    }
    return expens;

  }
  DeleteExpense(i:any){
    let allexpense=this.GetAllExpense();
    let det=allexpense.filter((exp:any)=>exp.id!=i);
    localStorage["expenses"]=JSON.stringify(det)
    return true;
  }

  HandleEdit(i:any, form:any){
    console.log(i);
    let allexpense= this.GetAllExpense();
    let edit = allexpense.filter((exp:any)=>exp.id!=i);
    localStorage["expenses"]=JSON.stringify([...edit,form])
    return true;

  }

  HandleCurrentuser(){
    if(localStorage["email"]){
      let email=JSON.parse(localStorage["email"]);
      let found=this.getUsers().find((user:any)=>user.email==email);
      return found
    }
    return {}
  }

  HandleSignUp=(form:any)=>{
    let found = this.getUsers().find((item:any, index:any)=> item.email == form.email)
    if(found){
      return{message:"Email already been used ",status:false}
    }else{
      let allUser=[...this.getUsers(),form];
      localStorage["allUsers"]=JSON.stringify(allUser);
      localStorage["email"]=JSON.stringify(form.email)
      return {message:"successfully created",status:true}
    }

  }

  HandleSignIn(form:any){
    let found=this.getUsers().find((user:any)=>user.email==form.email&&user.password==form.password);
    if(found){
      localStorage["email"]=JSON.stringify(form.email)
      return {message:"found successfully",status:true}
    }else{
      return{message:"Email or password is incorrect ",status:false}
    }
  }

  HandleUpdate(amt:Number){
    let allusers=this.getUsers()
    let current=this.HandleCurrentuser();
    let found=allusers.find((user:any)=>user.email==current.email)
    found.walletAmount+=amt;
    localStorage["allUsers"]=JSON.stringify(allusers)
    return true
  }


  GetAllExpense(){
    if(localStorage["expenses"]){
      let found =JSON.parse(localStorage["expenses"]);
      return found;
    }else{
      return [];
    }
  }

  GetAllCurrentUserExpense(){
    let user=this.HandleCurrentuser();
    let Allexpense=this.GetAllExpense().filter((expense:any)=>expense.creator==user.email)
    return Allexpense;
  }


  HandleSave(form:any){
    let allExpenses=this.GetAllExpense();
    localStorage["expenses"]=JSON.stringify([...allExpenses,{...form,id:allExpenses.length+1}]);
    return true
  }
}
