import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AppRoutingModule} from './components-routing.module';
import { GradesModule } from './grades/grades.module';
import {AuthRoutingModule} from './auth/auth-routing.module';
import { FormsModule } from '@angular/forms';


// import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

import { AuthModule} from './auth/auth.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome' ;
import { CarouselModule } from 'ngx-owl-carousel-o';


import {AnnouncementsComponent} from './announcements/announcements.component';
import {NavbarComponent} from './Navbar/Navbar.component';
import {TopNavComponent} from './TopNav/TopNav.component';
import {PagetiltleComponent} from './pagetiltle/pagetiltle.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AboutComponent} from './About/About.component';
import {TutorsComponent} from "./tutors/tutors.component";
import {TutorlistComponent} from './tutors-list/tutors-list.component';
import {PageNotfoundComponent} from './page-notfound/page-notfound.component';
import {DiscusionForumComponent} from './discusion-forum/discusion-forum.component';
import {InboxComponent} from './inbox/inbox.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChatComponent } from './chat/chat.component';
import {FooterComponent} from './footer/footer.component';
import { ViewPostComponent } from './discusion-forum/view-post/view-post.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {ViewAnnouncementComponent} from './announcements/view-announcement/view-announcement.component'

// import { MatButtonModule,  MatCommonModule} from '@angular/material';

import {LastSeenPipe} from '../pipes/lastSeen/lastSeen.pipe';
import { CreateAnnoucementComponent } from './modals/create-annoucement/create-annoucement.component';



@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppRoutingModule,
    GradesModule,
    AuthRoutingModule,
    FormsModule,
    AuthModule,
    FontAwesomeModule,
    CarouselModule,

  ],
  declarations: [
    NavbarComponent,
    HomepageComponent,
    AboutComponent,
    AnnouncementsComponent,
    TopNavComponent,
    PagetiltleComponent,
    TutorsComponent,
    TutorlistComponent,
    PageNotfoundComponent,
    DiscusionForumComponent,
    InboxComponent,
    NotificationsComponent,
    ChatComponent,
    FooterComponent,
    ViewPostComponent,
    TimelineComponent,
    CreateAnnoucementComponent,
    EditProfileComponent,
    ProfilePageComponent,
    ViewAnnouncementComponent,
    LastSeenPipe
  ],
  exports:[NavbarComponent,HomepageComponent,AboutComponent,TopNavComponent,PagetiltleComponent,TutorsComponent,TutorlistComponent,PageNotfoundComponent,DiscusionForumComponent,InboxComponent,NotificationsComponent,ChatComponent,FooterComponent,ViewAnnouncementComponent,LastSeenPipe]
})
export class ComponentsModule { }
