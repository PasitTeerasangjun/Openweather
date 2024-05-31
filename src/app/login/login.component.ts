import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {

  }

  Email: string = "";
  pass: string = "";

  check() {
    const e = document.getElementById("email") as HTMLParagraphElement;
    e.innerHTML = "";
    const p = document.getElementById("pass") as HTMLParagraphElement;
    p.innerHTML = "";

    console.log(this.Email, this.pass);

    let error = false;
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!this.Email.match(pattern)){
      console.log('fail');
      const out = document.getElementById("email") as HTMLParagraphElement;
      out.innerHTML = "* Please enter a valid email";
      error = true;
    }

    if (this.pass.length < 8  && this.pass != "") {
      console.log('fail');
      const out = document.getElementById("pass") as HTMLParagraphElement;
      out.innerHTML = "* Password must be at least 8 characters";
      error = true;
    }

    if (this.Email == "" || this.pass == "") {
      alert("Please fill out all fields");
      error = true
      if (this.Email == "") {
        const out = document.getElementById("email") as HTMLParagraphElement;
        out.innerHTML = "* Please enter infomation";
      }
      if (this.pass == "") {
        const out = document.getElementById("pass") as HTMLParagraphElement;
        out.innerHTML = "* Please enter infomation";
      }
    }

    if(error) {
      this.pass = "";
      return;
    }

    localStorage.setItem("email", this.Email);
    localStorage.setItem("pass", this.pass);

    this.router.navigate(['page']);

  }

  editemail() {
    const e = document.getElementById("email") as HTMLParagraphElement;
    e.innerHTML = "";
    if (this.Email == "") {
      const out = document.getElementById("email") as HTMLParagraphElement;
      out.innerHTML = "* Please enter infomation";

    }
  }

  editpass() {
    const p = document.getElementById("pass") as HTMLParagraphElement;
    p.innerHTML = "";
    if (this.pass == "") {
      const out = document.getElementById("pass") as HTMLParagraphElement;
      out.innerHTML = "* Please enter infomation";

    }
  }

  check_local(): boolean{
    if(localStorage.getItem("email") && localStorage.getItem("pass")){
      return true
    }else {
      return false
    }
  }

}
