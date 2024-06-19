import { Component, OnInit,ViewChild,Input } from '@angular/core';

import { Router } from '@angular/router';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import {ApiService} from '../../services/api.service';


@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() grade: any;
  @Input() subjects: { label: string; routerLink: string; }[] | undefined;
  
  faUser=faUser;
  loggedInUser:any;
  count: any;
  currentUser: any;

  grade10 = 'GRADE 10';
  grade11 = 'GRADE 11';
  grade12 = 'GRADE 12';

  grade10Subjects = [
    { label: 'MATHEMATICS', routerLink: '/grade10/mathematics' },
    { label: 'PHYSICAL SCIENCES', routerLink: '/grade10/physical-sciences' }
  ];

  grade11Subjects = [
    { label: 'MATHEMATICS', routerLink: '/grade11/mathematics' },
    { label: 'PHYSICAL SCIENCES', routerLink: '/grade11/physical-sciences' }
  ];

  grade12Subjects = [
    { label: 'MATHEMATICS', routerLink: '/grade12/mathematics' },
    { label: 'PHYSICAL SCIENCES', routerLink: '/grade12/physical-sciences' }
  ];
  grades: any;
  subjectslist: any;

  constructor(private apiservice: ApiService,private router:Router) { }

  ngOnInit() {
    this.loggedInUser = localStorage.getItem('loggedInUser');
    console.log(this.loggedInUser)
    this.getGrades();
    // this.getSubject();

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

  openAuth(){
    this.router.navigate(['/auth']);
  }
  logout(){
    localStorage.removeItem('loggedInUser')
    this.router.navigate(['/']).then(()=>{
      window.location.reload()
    })
  }
  getGrades() {
    this.apiservice.getGrades().subscribe(
      response => {
        this.grades = response;
        console.log("MySchool Grades", this.grades)
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
  // getSubject() {
  //   this.apiservice.getSubjects().subscribe(
  //     response => {
  //       this.subjectslist = response;
  //       console.log("Subjects", this.subjectslist)
  //     },
  //     error => {
  //       console.error('Error:', error);
  //     }
  //   );
  // }

}
