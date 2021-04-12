import { User } from './_models/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { EventSourcePolyfill } from 'ng-event-source';
import { ToastrService } from 'ngx-toastr';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  // <h2>working</h2>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sb-admin-angular';

  currentUser: User;
  sse:any;
  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private _http: HttpClient,
      private toastr: ToastrService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);      
      console.log('testing app component');
      // this.toastr.success('Successful Add');
      // this.toastr.info('Loading reports..');

      
    //   this.sse = new EventSourcePolyfill('http://localhost:8080/core/api/sse',{
    //     headers:{
    //         Authorization: `Bearer ${this.authenticationService.currentUserValue.access_token}`
    //     },
    //     heartbeatTimeout: 60000, 
    //     connectionTimeout: 60000            
    // });

    //   this.sse.onopen = function () {
    //        console.log('connection is established');
    //    };

    //  this.sse.onerror = function (error) {
    //        //console.log('connection state: ' + this.sse.readyState + ', error: ' + error);
    //        console.table(error);
    //    };

    //    this.sse.onmessage = function (evt) {
    // console.log('message');
    //   };

    }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }



}
