import { errorMessage } from './../_services/errorMessageService';
import { AuthenticationService } from './../_services/authentication.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,private route:Router, private errorMessage:errorMessage) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            console.log("error intercepted checking if duplicate");
            if(this.errorMessage.errorWasInvoked){
                console.log("it was a duplicate....");
                return throwError(this.errorMessage.serviceData);
            }

            var error;
            if (err instanceof HttpErrorResponse) {
                console.log("instance of HttpErrorResponse");
                if (err.error instanceof ErrorEvent) {
                    console.error("Error Event");
                } 
                //HTTP Error handling
                else {
                    console.log(`error status : ${err.status} ${err.statusText}`);
                    switch (err.status) {
                        case 401:      //login
                            this.route.navigateByUrl("/login");
                            break;
                        case 403:     //forbidden
                            this.route.navigateByUrl("/login");
                            break;
                        case 400:
                            break;
                        case 0:
                            this.route.navigateByUrl("/login");
                            err.error.error_description = "site is currently unavailable";
                            break;
                    }
                } 
                //throw err;
                error= err.error.error_description;
            }
            else {
                console.log(`error value is ${error}`);
                console.error("something else happened");
                this.route.navigateByUrl("/login");
                error = "site is currently unavailable";
            }
             console.table(err);
             this.errorMessage.serviceData = error;
             this.errorMessage.errorWasInvoked = true;
            return throwError(error);
        }))
    }
}