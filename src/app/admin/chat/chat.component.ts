import { MessageService } from './../../_services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  
  constructor(private messageService: MessageService) {
    console.log('testing constructor...')
   }

  ngOnInit(): void {
    //var socket =over(new SockJS('http://localhost:8080/core/ws'));
    
    
  }

  send(){
    this.messageService.sendMessage();

  }

}
