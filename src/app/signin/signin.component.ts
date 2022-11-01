import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public message = ""
  public email = ""
  public password = ""

  constructor(
    public router: Router,
    public userService: UserServiceService
  ) { }

  ngOnInit(): void {
  }
  login(){
    let { email, password, } = this
    if (email == "" || password== "") {
      this.message = "Invalid😢 all input must be filled🙏"
    }else{
      let result=this.userService.HandleSignIn({password,email})
      if(result.status){
        this.router.navigate(["/budget"])
      }else{
        this.message=result.message
      }

    }


  }

}
