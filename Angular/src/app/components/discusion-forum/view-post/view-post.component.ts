import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  post_id: any;
  post: any;
  grade: string | null = '';
  subject: string | null = '';
  id: string | null = '';
  

  breadCrumbItems: Array<{}> = [];

  constructor(private route: ActivatedRoute,private apiservice:ApiService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home page' },{ label: 'grade 10' },{ label: 'Mathematics' }];

    const postId = this.route.snapshot.paramMap.get('id');
    this.apiservice.getPostById(postId).subscribe((data: any) => {
      this.post = data;
      console.log(this.post)

      this.post_id = this.post.id
    });
    console.log(this.post_id)
    // ================================================
    this.route.paramMap.subscribe(params => {
      this.grade = this.route.snapshot.paramMap.get('grade');
      this.subject = this.route.snapshot.paramMap.get('subject');
      this.id = this.route.snapshot.paramMap.get('id');
      console.log('Grade:', this.grade, 'Subject:', this.subject, 'ID:', this.id); 
    });
    // ===============================================================
  }

  onComment(form: NgForm, postId: number) {
    if (form.valid) {
        const commentData = {
        content: form.value.comment,
      };
      this.apiservice.create_comments(postId, commentData).subscribe(
        (response) => {
          console.log('Commented successful:', response);

          form.resetForm();
        },
        (error) => {
          console.error('Comment failed failed:', error);
          // Handle error, e.g., display an error message to the user
        }
      );
    }
  }

}
