import { AuthenticationService } from './../_services/authentication.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as moment from 'moment'; 


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        
        // check if api is up and running        
        if (currentUser && !this.IsExpired(currentUser) ) {
            console.table(currentUser);
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }

    IsExpired(currentUser: any) {  
        if(currentUser==null){
            return true;
        }             
        console.log(moment().format('MMM DD h:mm A')  + " is After " + currentUser.expirationDate );
        console.log(moment(moment().format('MMM DD h:mm A')).isAfter(currentUser.expirationDate));
        return moment(moment().format('MMM DD h:mm A')).isAfter(currentUser.expirationDate);        
        //document.write("is before: " + moment(added).isAfter("Dec 14 5:24 PM"));
    }
}