import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  constructor() { }

  data!:any[];
  userData!:object;

  dataEmitter = new Subject<object>();

  dataEmitterEvent(data:Object){
    this.dataEmitter.next(data);
  }

  // userData= {
  //   firstName: '',
  //   lastName: '',
  //   email: ''
  // };

  // getData(){
  //   return this.data;
  // }
  // getUser(){
  //   return this.userData;
  // }
}
