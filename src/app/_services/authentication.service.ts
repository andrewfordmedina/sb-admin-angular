import { User } from './../_models/user';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as moment from 'moment';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    createAuthorizationHeader() {
        return { 'Authorization': 'Basic ' +
        btoa('ccors-client:ccors-secret'), 'Content-Type': 'application/x-www-form-urlencoded'} 
      }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
         let body = new URLSearchParams();
         body.set('username', username);
         body.set('password', password);
         body.set('grant_type', 'password');
          
        return this.http.post<any>(`${environment.apiUrl}/oauth/token`  ,body.toString(),{'headers' :this.createAuthorizationHeader()})
            .pipe(
                map(
                user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                var added = moment().add(user.expires_in,'seconds').format('MMM DD h:mm A');
                user.expirationDate =added; 
                user.username = username;
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                console.log(user);
                return user;
            },error => {
                console.log("inside error map");
                console.log(error);
              }
            )
            );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    isApiRunning() {
        try{
            console.log("trying to check if api is running");
            this.http.get<any>(`${environment.apiUrl}/test`  , {'headers' :this.createAuthorizationHeader()});
        } catch (Error){
            console.table("inside error")
            console.table(Error);
            console.log("Api is down...")
            return false;
        }

        }

}