import { User } from './../_models/user';
import { Response } from './../_models/response';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    createHeader() {
        return { 'Content-Type': 'application/json'} 
      }

      getAll() {
        console.log("getting users");
        return this.http.get<Response>(`${environment.apiUrl}/api/users`);
    }

    get(id:string) {
        return this.http.get<User[]>(`${environment.apiUrl}/user/${id}`);
    }

    add(user: User) {
        return this.http.post<User>(`${environment.apiUrl}/user`,JSON.stringify(user), {'headers' :this.createHeader()} );
    }
    
    delete(id:string) {
        return this.http.delete<User[]>(`${environment.apiUrl}/user/${id}` );
    }

    update(user: User) {
        return this.http.put<User[]>(`${environment.apiUrl}/user`,JSON.stringify(user) );
    }




}