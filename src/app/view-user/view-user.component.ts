import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  public currentRouter = ""
  public list:any = {};
  public expenseTotal:number=0;
  constructor(
    public actRoute: ActivatedRoute,
    private userService:UserServiceService,
  ) { }

  ngOnInit(): void {
    this.currentRouter = this.actRoute.snapshot.params["id"]
    let allList=this.userService.GetAllCurrentUserExpense();
    this.list = allList.find((item:any, index:any)=>item.id == this.currentRouter);


  }

}
