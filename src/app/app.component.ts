import { User } from './_models/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';
import { HttpClient } from '@angular/common/http';

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

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private _http: HttpClient
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }



}
