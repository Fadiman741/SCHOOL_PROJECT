import { Component, OnInit } from '@angular/core';
import {ApiService} from './services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myschool';
  loggedInUser: any;
  

  constructor(private apiservice:ApiService) {
    this.loggedInUser = apiservice.getLoggedInUser();
  }


  ngOnInit(){
    // this.loggedInUser = localStorage.getItem('loggedInUser');
    console.log(this.loggedInUser);

    // if(this.loggedInUser == ''){
    //   this.loggedInUser == null;
    // }
  }
}
