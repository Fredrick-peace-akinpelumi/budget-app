import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public firstName = ""
  public lastName = ""
  public email = ""
  public password = ""
  public message:string = ""
  constructor(
    public router:Router,
    public userService:UserServiceService
  ) { }

  ngOnInit(): void {

  }


    signUp(){
      let {firstName, lastName, email, password,  message}=this
      if (firstName == "" || lastName=="" || email=="" || password=="") {
        this.message ="Invalid😢 all input must be filled🙏"
      }else{
        if([firstName,lastName,email,password].every(Boolean)){
          let result=this.userService.HandleSignUp({firstName, lastName, email, password, walletAmount:0})
          if(result.status){
            this.router.navigate(["/budget"])
          }else{
            this.message=result.message;
          }
        }

      }

    }
}
