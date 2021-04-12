import { UserService } from './../_services/user.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { first, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class resolverDatables implements Resolve<User> {
  constructor(private service: UserService) {}

  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):Observable<any>|Promise<any>|any {
   return this.service.getAll().pipe(catchError((error) => {console.log("returning empty"); return empty()}));
  }
}