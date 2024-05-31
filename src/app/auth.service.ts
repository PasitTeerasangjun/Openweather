import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  canActivate() {
    let token = localStorage.getItem("email");
    console.log(token);
    if(token){
      this.router.navigate(['home']);
      return true
    } else {
      this.router.navigate(['login']);
      return false
    }
    
  }
}
