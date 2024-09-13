import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }
  
  setUser(user:any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    console.log("StorageService/setUser")
    console.log(user)
  }

  getUser(): any {
    const user = sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    console.log("StorageService/getUser")
    console.log(user)

    return null;
  }
}
