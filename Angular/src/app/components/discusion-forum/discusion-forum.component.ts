import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
// import { ModalServiceService} from '../../modal-services/modal-service.service'
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-discusion-forum',
  templateUrl: './discusion-forum.component.html',
  styleUrls: ['./discusion-forum.component.css']
})
export class DiscusionForumComponent implements OnInit {


  breadCrumbItems: Array<{}> = [];
  loggedInUser!: string | null;
  posts: any = [];
  // posts: Post[] = [];
  showReplies = false;
  showDropdown = false;
  announcements: any;

  currentUser: any;

  // constructor(private apiservice: ApiService,private router:Router ,private modalservice:ModalServiceService) { }
  constructor(private route: ActivatedRoute,private apiservice: ApiService,private router:Router ) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home page' },{ label: 'grade 10' },{ label: 'Mathematics' }];
    this.loggedInUser = localStorage.getItem('loggedInUser');
    console.log(this.loggedInUser);

    if(this.loggedInUser == ''){
      this.loggedInUser == null;
    }
    this.getPosts();
    this.getAnnouncements();

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
  getPosts = () => {
    this.apiservice.getAllPosts().subscribe(
      (data) => {
        this.posts = data;
        console.log(this.posts);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  getAnnouncements = () => {
    this.apiservice.getAllAnnouncements().subscribe(
      data => {
        this.announcements = data.slice(0, 2);;
        console.log(this.announcements);
      },
      error => {
        console.log(error);
      }
    );
  }

  onDeletePost = (postId: any) =>{
    this.apiservice.deletePost(postId).subscribe(
      () => {
        console.log('Item deleted successfully');
        this.posts = this.posts.filter((post: { id: any; }) => post.id !== postId)
      },
      (error) => {
        console.error('Error deleting item:', error);
      }
      )
  }

  toggleReplies() {
    this.showReplies = !this.showReplies;
  }
  viewPost(data:any) {
    this.router.navigate(['/view-post', data.id]);
  }

  editItem(id:number) {
    // Implement your edit logic here
    console.log('Edit item clicked');
  }

  deleteItem() {
    // Implement your delete logic here
    console.log('Delete item clicked');
  }

  // toggleComments(post: Post): void {
  //   post.showComments = !post.showComments; // Toggle the showComments property
  // }

  // toggleNestedComments(comment: Comment): void {
  //   comment.showNestedComments = !comment.showNestedComments; // Toggle the showNestedComments property
  // }

  onlikePost(postID: any): void {
    this.apiservice.likePost(postID).subscribe((data: any) => {
      console.log(Response, " Post liked Succesful ")
    }),
    (error: any) => {
      console.error('Error while liking the post', error);
    };
  }

  // unlikePost(post: any): void {
  //   this.apiservice.unlikePost(post.id).subscribe((data: any) => {
  //     post.likes--;
  //   });
  // }

  onforumSubmit(form: NgForm) {
    if (form.valid) {
      const post = {
        content: form.value.description,
      };
      this.apiservice.create_posts(post).subscribe(
        (response) => {
          console.log('Post posted successful:', response);
          // Handle successful, e.g., show a success message to the user
          this.posts=[]
          this.getPosts()
          form.resetForm();
        },
        (error) => {
          console.error('Post failed:', error);
          // Handle error, e.g., display an error message to the user
        }
      );
    }
  }
  


}
