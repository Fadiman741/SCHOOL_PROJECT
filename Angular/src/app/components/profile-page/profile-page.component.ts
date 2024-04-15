import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  fullName = 'Your Name';
  bio = 'Write a short bio here.';
  email = 'your.email@example.com';
  phone = '123-456-7890';
  location = 'Your City, Country';
  subjects = ['Subject 1', 'Subject 2', 'Subject 3'];
  
  breadCrumbItems: Array<{}> = [];
  currentUser: any;
  
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
     this.breadCrumbItems = [{ label: 'Home' }, { label: 'Profile', active: true }];
    this.apiservice.getCurrentUser().subscribe(
      response => {
        this.currentUser = response;
        console.log(this.currentUser)
      },
      error => {
        console.error('Error:', error);
      }
    );

  }
  getLoggedInUser() {
    this.apiservice.getLoggedInUserDetails().subscribe(
      (response) => {
        this.currentUser = response;
        console.log(this.currentUser);
      },
      (error) => {}
    );

  }

}
