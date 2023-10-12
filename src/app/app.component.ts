import { Component, OnInit } from '@angular/core';
import { BaseServiceService } from './services/base-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'userForm';
  constructor(private welcomeService:BaseServiceService){

  }
  ngOnInit(){
    console.log(this.welcomeService.data+'hello')
    // this.welcomeService.welcome();
  }
}


