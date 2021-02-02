import { User } from './../_models/user';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var SockJS;
declare var Stomp;


@Injectable({ providedIn: 'root' })
export class MessageService {
    
    public stompClient;
    public msg = [];

    constructor() {
        this.initializeWebSocketConnection();
      }

      initializeWebSocketConnection() {
        const serverUrl_springmvc = 'http://localhost:8080/core/ws';
        const serverUrl_springboot = 'http://localhost:8080/ws';
        const ws = new SockJS(serverUrl_springboot);
        this.stompClient = Stomp.over(ws);
        const that = this;
        // tslint:disable-next-line:only-arrow-functions
        this.stompClient.connect({}, function(frame) {
          that.stompClient.subscribe('/topic/public', (message) => {
            if (message.body) {
              that.msg.push(message.body);
            }
          });
        });
      }

      sendMessage() {
        this.stompClient.send('/app/chat.addUser' , {}, JSON.stringify({sender: "alec", type: 'JOIN'}));
        console.log('sent message');
      }


}