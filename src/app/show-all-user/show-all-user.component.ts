import { Component, Input ,EventEmitter} from '@angular/core';
import { BaseServiceService } from '../services/base-service.service';
import { User } from '../user-form/user-form.component';

@Component({
  selector: 'app-show-all-user',
  templateUrl: './show-all-user.component.html',
  styleUrls: ['./show-all-user.component.css']
})
export class ShowAllUserComponent {
  constructor(private baseService:BaseServiceService){
    this.users=baseService.data;
    
  }
users!:any;

// person!:object;
// clickEvent = new EventEmitter()
// editUser(user:any){
//    this.baseService.userData=this.clickEvent.emit(user);
// }
editUser(user:any){
  this.baseService.dataEmitterEvent(user);
}

user:User={
  firstName :'',
  lastName :'',
  email :''
}
}
