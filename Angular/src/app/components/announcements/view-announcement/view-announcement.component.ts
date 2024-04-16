import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-announcement',
  templateUrl: './view-announcement.component.html',
  styleUrls: ['./view-announcement.component.css']
})
export class ViewAnnouncementComponent implements OnInit {
  announcement: any;
  announcements: any;
  showDropdown: any;
  breadCrumbItems: Array<{}> = [];

  constructor(private route: ActivatedRoute,private apiservice: ApiService,private router:Router) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home page' },{ label: 'Annoucement' }];

    const announcementId = this.route.snapshot.paramMap.get('id');
    // console.log(announcementId)
    // this.apiservice.getAnnouncement(announcementId).subscribe((data: any) => {
    //   this.announcement = data;
    //   console.log(this.announcement)
    // });
    if (announcementId !== null) {
  const idNumber = Number(announcementId);
  if (!isNaN(idNumber)) {
    this.apiservice.getAnnouncement(idNumber).subscribe((data: any) => {
      this.announcement = data;
      console.log(this.announcement);
    });
  } else {
    console.error('Invalid announcement ID:', announcementId);
  }
} else {
  console.error('Announcement ID is null.');
}

  }
  onDeleteAnnouncement = (announcementId: any) =>{
    this.apiservice.deleteAnnouncement(announcementId).subscribe(
      () => {
        console.log('Item deleted successfully');
        this.announcements = this.announcements.filter((post: { id: any; }) => post.id !== announcementId)
      },
      (error) => {
        console.error('Error deleting item:', error);
      }
      )
  }
  editItem(id:number) {
    console.log('Edit item clicked');
  }


}
