import { Component,OnInit } from '@angular/core';
import { BaseServiceService } from '../services/base-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
 
  constructor(private baseService:BaseServiceService){
    baseService.data=this.allUser;
  }
  ngOnInit(){
    this.baseService.dataEmitter.subscribe((value)=>{
      // this.user = value;
    })
  }

  allUser:any = [];
  user:User={
    firstName :'',
    lastName :'',
    email :''
  }
  // user: User | null = null; 
  addUser(){
    console.log(this.user);
    this.allUser.push({...this.user});

    this.user={
      firstName: "",
      lastName:"",
      email:""
    }
  }
}
export interface User{
  firstName : String,
  lastName :String,
  email:String
}