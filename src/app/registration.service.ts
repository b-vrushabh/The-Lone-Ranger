import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  registerUser(user : User){
   
    alert(JSON.stringify(user));
    alert("/api/register");
    this.http.post("/api/register",JSON.stringify(user));

  }

  constructor( private http: HttpClient) { }
}
