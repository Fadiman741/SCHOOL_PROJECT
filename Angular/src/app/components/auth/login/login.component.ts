import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiservice:ApiService, private router:Router) { }

  ngOnInit() {
  }


  onSignInSubmit(form: any) {
      if (form.valid) {
        const user = {
          email: form.value.email,
          password: form.value.password
          
        };
  
        this.apiservice.login(user).subscribe(
          (response) => {
            console.log('login successful:', response);
            localStorage.setItem('loggedInUser',user.email)
            localStorage.setItem('token',response.token)

            // localStorage.setItem('loggedInUser',user.email)
            localStorage.setItem('token', response.token)
				    localStorage.setItem('loggedInUser',response.Email)
				    localStorage.setItem('loggedInUserId',response.Occupation)
				    this.apiservice.currentUser = response
            this.apiservice.showFlashMessage('Login successful', 'success');
            this.router.navigate(["/"])
            // this.router.navigate(["/"]).then(()=>{
            //   // window.location.reload();
            // })
          },
          (error) => {
            console.error('login failed:', error);
          }
          
        );
      }
    }

}
