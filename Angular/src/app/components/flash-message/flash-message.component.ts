import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.css']
})
export class FlashMessageComponent implements OnInit {
  message: any;

  constructor( private apiService:ApiService) { }

  ngOnInit() {
  }

}
