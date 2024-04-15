import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ModalServiceService } from '../../modal-services/modal-service.service';


@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  @Input() lastSeen: Date | undefined;

  breadCrumbItems: Array<{}> = [];
  isReadMore: true = true;
  announcements: any;

  showReplies = false;
  showDropdown = false;

  constructor(private apiservice: ApiService,private router:Router,private ModalServiceService:ModalServiceService) { }
  @ViewChild('announcementForm') signupForm!: NgForm;

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home' }, { label: 'Announcement', active: true }];
    this.getAnnouncements();
  }

  showText() {
    this.isReadMore != this.isReadMore;
  }

  getAnnouncements = () => {
    this.apiservice.getAllAnnouncements().subscribe(
      data => {
        this.announcements = data;
        console.log(this.announcements);
      },
      error => {
        console.log(error);
      }
    );
  }
  onAnnoucementSubmit(form: NgForm) {
    if (form.valid) {
      const announcement = {
        title: form.value.title,
        description: form.value.description,
      };
      this.apiservice.create_announcement(announcement).subscribe(
        (response) => {
          console.log('Announcement posted successful:', response);
          // Handle successful, e.g., show a success message to the user
          // this.router.navigate(["announcement/"])
          this.announcements=[]
          this.getAnnouncements()
          form.resetForm();
        },
        (error) => {
          console.error('Announcement failed:', error);
          // Handle error, e.g., display an error message to the user
        }
      );
    }
  }
  onDeleteAnnouncement = (announcementId: any) =>{
    this.apiservice.deleteAnnouncement(announcementId).subscribe(
      () => {
        console.log('Item deleted successfully');
        
        this.announcements = this.announcements.filter((post: { id: any; }) => post.id !== announcementId)
        // Handle any other actions after successful deletion
      },
      (error) => {
        console.error('Error deleting item:', error);
        // Handle errors
      }
      )
  }
  editItem(id:number) {
    // Implement your edit logic here
    console.log('Edit item clicked');
  }

  openModal(): void {
      this.ModalServiceService.CreateAnnoucement();
  }
}