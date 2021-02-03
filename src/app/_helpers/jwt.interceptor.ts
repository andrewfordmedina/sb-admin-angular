import { AuthGuard } from './auth.guard';
import { environment } from './../../environments/environment';
import { AuthenticationService } from './../_services/authentication.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,private authGuard:AuthGuard) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const currentUser = this.authenticationService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.access_token;
        const isApiUrl = request.url.startsWith(environment.apiUrl);        
        //this.authenticationService.isApiRunning();
        
        if (!this.authGuard.IsExpired(currentUser) && !request.url.includes("oauth/token")) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.access_token}`, 'Content-Type': 'application/json'
            }
            });

        }

        return next.handle(request);
    }


}