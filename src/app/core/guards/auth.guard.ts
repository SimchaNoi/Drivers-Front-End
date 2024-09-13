import { Injectable } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({ providedIn: 'root' })

export class AuthGuard {
  constructor(private storageService:StorageService,private router:Router) { }

  canActivate( state: RouterStateSnapshot) {
    const currentUser = this.storageService.getUser()
      // check if user data is in storage is logged in via API.
      if(currentUser){
        console.log(currentUser)
          return true;
    }
    
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } })
      return false;
    
};
}