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
  post:any;

  breadCrumbItems: Array<{}> = [];

  constructor(private route: ActivatedRoute,private apiservice:ApiService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home page' },{ label: 'grade 10' },{ label: 'Mathematics' }];

    const postId = this.route.snapshot.paramMap.get('id');
    this.apiservice.getPostById(postId).subscribe((data: any) => {
      this.post = data;
      console.log(this.post)
    });
    console.log(this.post_id)
    // this.apiservice.getAllPosts
    // this.route.params.subscribe(params => {
    //   this.post_id = +params['id'];
    //   this.fetchPostDetails(this.post_id);
    // });
  }
  // fetchPostDetails( id:number) {
  //   this.apiservice.getPostById(id).subscribe(
  //     (data) => {
  //       this.post = data; // Assuming your API returns the entire post object
  //       console.log(this.post)
  //     },
  //     (error) => {
  //       console.error('Error fetching post:', error);
  //     }
  //   );
  // }
  // fetchComments(postId: string) {
  //   this.apiservice.getCommentsByPostId(postId).subscribe((data) => {
  //     this.comments = data;
  //   });
  // }
  onComment(form: NgForm) {
    if (form.valid) {
      const post = {
        content: form.value.comment,
      };
      this.apiservice.create_comments(post).subscribe(
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
