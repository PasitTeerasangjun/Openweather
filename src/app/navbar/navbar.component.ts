import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) { }

  home : boolean = true;
  page : boolean = false;
  @Output() update_stats = new EventEmitter<boolean> ();

  tohome(){
    this.update_stats.emit(this.home);
    this.router.navigate(['home']);
    // console.log(this.home);
  }

  topage(){
    this.router.navigate(['home']);
    this.update_stats.emit(this.page);
  }

  tologin(){
    this.router.navigate(['login']);
  }

  toregister(){
    this.router.navigate(['form']);
  }

  check_local(): boolean{
    if(localStorage.getItem("email") && localStorage.getItem("pass")){
      return true
    }else {
      return false
    }
  }

  getemail(): string{
    let count = localStorage.getItem('email')?.indexOf("@",1);
    return localStorage.getItem('email')?.substring(0,count) + '@...' || '';
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
