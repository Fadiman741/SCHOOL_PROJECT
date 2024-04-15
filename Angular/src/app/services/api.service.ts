import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

     baseUrls = 'http://localhost:8000/api';
     private socket$: WebSocketSubject<any>;

// httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
private authToken: string | null = null;
private message: string | null = null;
private messageType: string | null = null;
     private loggedInUser: any;
     currentUser: any;

     constructor(private http: HttpClient) { 
     this.socket$ = webSocket('ws://localhost:8000/api/notifications/')
}
     showFlashMessage(message: string, type: string) {
          this.message = message;
          this.messageType = type;

          setTimeout(() => {
          this.clearFlashMessage();
          }, 3000); // Automatically clear after 3 seconds
     }
     clearFlashMessage() {
          this.message = null;
          this.messageType = null;
     }
     getMessage() {
          return this.message;
     }
     getMessageType() {
          return this.messageType;
     }
//============================HEADERS======================================================================

     // headers = this.authToken? new HttpHeaders({
     //                'Content-Type': 'application/json',
     //                'Authorization': `Token ${this.getAuthToken()}`
     //           })
     //           : new HttpHeaders({
     //                'Content-Type': 'application/json'
     // });
     headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Token ${this.getAuthToken()}`, // Replace with your token
     });


     getAuthToken() {
          // todo check if token is available
          return localStorage.getItem("token")
     }
     // post(url:string, data:any) {
     //      return this.http.post(url, data, {
     //           headers: this.headers
     //      });
     // }
     // postData(url:string,data: any) {
     //      const headers = new HttpHeaders({
     //           'Content-Type': 'application/json',
     //           Authorization: `Token ${this.getAuthToken()}`, // Replace with your token
     //      });
     //      const options = { headers: headers };
     //      return this.http.post(this.baseUrls + url, data, options);
     // }
//========================================   AUTH   ==============================================================
     login(credentials: any): Observable<any> {
          return this.http.post(this.baseUrls + '/login/', credentials);
     }
     register(user: any): Observable<any> {
          return this.http.post(this.baseUrls+ '/signup/', user );
     }
     logout(): void {
          this.loggedInUser = null;
     }
     getLoggedInUser(): any {
          return this.loggedInUser;
     }
// ======================================================  USER ===================================================
     getCurrentUser(): Observable<any> {
     return this.http.get<any>(this.baseUrls +'/get_current_user/',{ headers: this.headers });
     }
     UpdateCurrentUser(user: any): Observable<any> {
     return this.http.put<any>(this.baseUrls +'/update_current_user/',user, { headers: this.headers });
     }
//========================================  GET USER DETAILS  ==============================================================

     getLoggedInUserDetails(){
          var userId = localStorage.getItem("loggedInUserId");
          return this.http.get(this.baseUrls+ `/update-users/${userId}`);
     }
//================================================  ANNOUCEMENT  ================================================
     create_announcement(announcement: any): Observable<any> {
          return this.http.post(this.baseUrls +'/create_announcement/',announcement,{ headers: this.headers });
     }
     getAllAnnouncements() : Observable<any>{
          return this.http.get(this.baseUrls + '/announcements/')
     }
     getAnnouncement(announcementId: number) : Observable<any>{
          return this.http.get(`${this.baseUrls}/announcement/${announcementId}/`,{ headers: this.headers });
     }
     deleteAnnouncement(announcementId: number) : Observable<any>{
          return this.http.delete(`${this.baseUrls}/announcement/${announcementId}/`,{ headers: this.headers });
     }
     updateAnnouncement(announcementId: number) : Observable<any>{
          return this.http.get(`${this.baseUrls}/announcement/${announcementId}/`,{ headers: this.headers })
     }
//================================================POSTS================================================
     create_posts(announcement: any): Observable<any> {
          return this.http.post(this.baseUrls +'/create_post/',announcement,{ headers: this.headers });
     }
     getAllPosts() : Observable<any>{
          return this.http.get(this.baseUrls + '/posts/');
          }
     getPostById(postId: any): Observable<any> {    
          return this.http.get(`${this.baseUrls}/post/${postId}/`,{ headers: this.headers });
     }
     deletePost(postId: any): Observable<any> {    
          return this.http.delete(`${this.baseUrls}/post/${postId}/`,{ headers: this.headers });
     }
     updatePost(postId: any): Observable<any> {    
          return this.http.put(`${this.baseUrls}/post/${postId}/`,{ headers: this.headers });
     }
     likePost(postId: any): Observable<any> {    
          return this.http.post(`${this.baseUrls}/post/${postId}/like/`,{ headers: this.headers });
     }
     DislikePost(postId: any): Observable<any> {    
          return this.http.post(`${this.baseUrls}/post/${postId}/dislike/`,{ headers: this.headers });
     }
//================================================USERS================================================
     getAllUsers() : Observable<any>{
          return this.http.get(this.baseUrls + '/users/');
          }
     getUserById(userID: number): Observable<any> {    
          return this.http.get(`${this.baseUrls}/update-users/${userID}`);
     }
//================================================COMMENTS================================================
     create_comments(announcement: any): Observable<any> {
          return this.http.post(this.baseUrls+'/create_comment/',announcement);
          }
     getAllcomments() : Observable<any>{
          return this.http.get(this.baseUrls + '/comments/')
          }
     getCommentById(commentId: number): Observable<any> {
          return this.http.get(`${this.baseUrls}/comment/${commentId}`);
     }
     deleteComment(commentId: number): Observable<any> {
          return this.http.get(`${this.baseUrls}/comment/${commentId}`);
     }
     updateComment(commentId: number): Observable<any> {
          return this.http.get(`${this.baseUrls}/comment/${commentId}`);
     }
//================================================NOTIFICATIONS================================================

     getAllNotifications() : Observable<any>{
          return this.http.get(this.baseUrls + '/notifications/');
          };

     // getNotificationById(userID: number): Observable<any> {    
     //      return this.http.delete(`${this.baseUrls}/notifications/${userID}`);
     // }
     getNewAnnouncements(lastCheckTime: string): Observable<any[]> {
          return this.http.get<any[]>(`/api/announcements/?last_check_time=${lastCheckTime}`);
     }
}
