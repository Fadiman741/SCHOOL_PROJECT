import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  breadCrumbItems: Array<{}> = [];
  
  tutors: any;
  tutorlist: any;
  institutions:any;
  members:any;
  students: any;
  announcements: any;

  constructor( private apiservice:ApiService,private router:Router) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home page' }];
    this.getTutors();
    this.getAnnouncements();
  }
    getAnnouncements = () => {
    this.apiservice.getAllAnnouncements().subscribe(
      data => {
        this.announcements = data.slice(0, 4);
        console.log(this.announcements);
      },
      error => {
        console.log(error);
      }
    );
  }
  getTutors = () => {
    this.apiservice.getAllUsers().subscribe(
      (data) => {
        this.institutions = data.filter((user: { occupation: string; }) => user.occupation === 'Institution');
        console.log(this.institutions);
        this.tutors = data.filter((user: { occupation: string; }) => user.occupation === 'Tutor');
        this.tutorlist = this.tutors.slice(0, 4);
        console.log(this.tutorlist);
        console.log(this.tutors);
        this.students = data.filter((user: { occupation: string; }) => user.occupation === 'Student'); 
        console.log(this.students);
        this.members = data;
        console.log(this.members);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 10,
    navSpeed: 600,
    // navText: ['&#8249', '&#8250;'],
    navText: ['', ''],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1200: {
        items: 3
      },
      1400: {
        items: 4
      }
    },
    nav: true
  }
  navigateToViewAnnouncement(id: number): void {
    this.router.navigate(['view-announcement/', id]);
  }
}
