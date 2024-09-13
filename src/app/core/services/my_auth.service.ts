import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/global-component';
import { StorageService } from './storage.service';
import { User } from 'src/app/vel/core/models/auth.models';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  _url:string=GlobalComponent.ACCOUNT_API;
  _logIn:string=GlobalComponent.LOG_IN;
  _register:string=GlobalComponent.REGISTER;

  constructor(private http:HttpClient, private storage:StorageService) { }

  register(user:User) {
    this.http.post(this._url+this._register,user)
  }

  login(DriverEmail: string, DriverPass: string):Observable<any> {
   const user = (this.http.post(this._url+this._logIn,{DriverEmail,DriverPass})); 
   if (user){
    this.storage.setUser(user)
  }
  return user;
  }

}
