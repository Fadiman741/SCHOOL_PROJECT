import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {FlashMessageComponent} from '../flash-message/flash-message.component'
import {AuthTemplateComponent} from './auth-template/auth-template.component';
import{PagetiltleComponent} from '../pagetiltle/pagetiltle.component';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
  ],
  declarations: [SignupComponent,LoginComponent,AuthTemplateComponent,FlashMessageComponent],
  exports:[SignupComponent,LoginComponent,AuthTemplateComponent]

})
export class AuthModule { }
