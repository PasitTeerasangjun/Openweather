import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private router: Router) {

  }

  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      return false;
    }
    return true;

  }

  First: string = "";
  Last: string = "";
  Age: string = "";
  Gender: any;
  Email: string = "";
  Phone: string = "";
  pass: string = "";
  confirm: string = "";
  check() {
    const f = document.getElementById("first") as HTMLParagraphElement;
    f.innerHTML = "";
    const l = document.getElementById("last") as HTMLParagraphElement;
    l.innerHTML = "";
    const a = document.getElementById("age") as HTMLParagraphElement;
    a.innerHTML = "";
    const g = document.getElementById("gender") as HTMLParagraphElement;
    g.innerHTML = "";
    const e = document.getElementById("email") as HTMLParagraphElement;
    e.innerHTML = "";
    const p = document.getElementById("phone") as HTMLParagraphElement;
    p.innerHTML = "";
    const pa = document.getElementById("pass") as HTMLParagraphElement;
    pa.innerHTML = "";
    const co = document.getElementById("confirm") as HTMLParagraphElement;
    co.innerHTML = "";

    let error = false;
    if (this.First == "" || this.Last == "" || this.Age == "" || this.Email == "" || this.Phone == "" || this.pass == "" || this.confirm == "" || this.Gender == null) {
      alert("Please fill out all fields");
      error = true
      if (this.First == "") {
        const out = document.getElementById("first") as HTMLParagraphElement;
        out.innerHTML = "* Please enter infomation";
      }
      if (this.Last == "") {
        const out = document.getElementById("last") as HTMLParagraphElement;
        out.innerHTML = "* Please enter infomation";
      }
      if (this.Age == "") {
        const out = document.getElementById("age") as HTMLParagraphElement;
        out.innerHTML = "* Please enter infomation";
      }
      if (this.Email == "") {
        const out = document.getElementById("email") as HTMLParagraphElement;
        out.innerHTML = "* Please enter infomation";
      }
      if (this.Phone == "") {
        const out = document.getElementById("phone") as HTMLParagraphElement;
        out.innerHTML = "* Please enter infomation";
      }
      if (this.Gender == null) {
        const out = document.getElementById("gender") as HTMLParagraphElement;
        out.innerHTML = "* Please enter infomation";
      }
      if (this.pass == "") {
        const out = document.getElementById("pass") as HTMLParagraphElement;
        out.innerHTML = "* Please enter infomation";
      }
    }

    const pattern = /^[[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;


    if (!this.Email.match(pattern)) {
      console.log('fail');
      const out = document.getElementById("email") as HTMLParagraphElement;
      out.innerHTML = "* Please enter a valid email";
      error = true;
    }

    if (this.Phone.length != 10) {
      console.log('fail');
      const out = document.getElementById("phone") as HTMLParagraphElement;
      out.innerHTML = "* Please enter a valid phone number";
      error = true;
    }

    if (this.pass.length < 8 && this.pass != "") {
      console.log('fail');
      this.pass = "";
      this.confirm = "";
      const out = document.getElementById("pass") as HTMLParagraphElement;
      out.innerHTML = "* Password must be at least 8 characters";
      error = true;
    }

    if (this.pass != this.confirm) {
      console.log('fail');
      this.pass = "";
      this.confirm = "";
      const out = document.getElementById("pass") as HTMLParagraphElement;
      out.innerHTML = "* Password and Confirm password do not match";
      error = true;
    }

    if (error) {
      return;
    }

    console.log('Firstname : ' + this.First);
    console.log('Lastname : ' + this.Last);
    console.log('Age : ' + this.Age);
    console.log('Gender : ' + this.Gender);
    console.log('Email : ' + this.Email);
    console.log('Phone : ' + this.Phone);
    console.log('Password : ' + this.pass);
    this.router.navigate(['/login']);

  }

  cancel() {
    this.First = "";
    this.Last = "";
    this.Age = "";
    this.Email = "";
    this.Phone = "";
    this.pass = "";
    this.confirm = "";
    this.Gender = null;

    const f = document.getElementById("first") as HTMLParagraphElement;
    f.innerHTML = "";
    const l = document.getElementById("last") as HTMLParagraphElement;
    l.innerHTML = "";
    const a = document.getElementById("age") as HTMLParagraphElement;
    a.innerHTML = "";
    const g = document.getElementById("gender") as HTMLParagraphElement;
    g.innerHTML = "";
    const e = document.getElementById("email") as HTMLParagraphElement;
    e.innerHTML = "";
    const p = document.getElementById("phone") as HTMLParagraphElement;
    p.innerHTML = "";
    const pa = document.getElementById("pass") as HTMLParagraphElement;
    pa.innerHTML = "";
    const co = document.getElementById("confirm") as HTMLParagraphElement;
    co.innerHTML = "";
  }

  //Check input value empty;
  editfirst(){
    const out = document.getElementById("first") as HTMLParagraphElement;
    out.innerHTML = "";
    if(this.First == ""){
      const out = document.getElementById("first") as HTMLParagraphElement;
      out.innerHTML = "* Please enter infomation";
    }
  }

  editlast(){
    const out = document.getElementById("last") as HTMLParagraphElement;
    out.innerHTML = "";
    if(this.Last == ""){
      const out = document.getElementById("last") as HTMLParagraphElement;
      out.innerHTML = "* Please enter infomation";
    }
  }

  editage(){
    const out = document.getElementById("age") as HTMLParagraphElement;
    out.innerHTML = "";
    if(this.Age == ""){
      const out = document.getElementById("age") as HTMLParagraphElement;
      out.innerHTML = "* Please enter infomation";
    }
  }

  editgender(){
    const out = document.getElementById("gender") as HTMLParagraphElement;
    out.innerHTML = "";
  }

  editemail(){
      const out = document.getElementById("email") as HTMLParagraphElement;
      out.innerHTML = "";
      if(this.Email == ""){
        const out = document.getElementById("email") as HTMLParagraphElement;
        out.innerHTML = "* Please enter infomation";
      
    }
  }

  editphone(){
    const out = document.getElementById("phone") as HTMLParagraphElement;
    out.innerHTML = "";
    if(this.Phone == ""){
      const out = document.getElementById("phone") as HTMLParagraphElement;
      out.innerHTML = "* Please enter infomation";
    }
  }

  editpass(){
    const out = document.getElementById("pass") as HTMLParagraphElement;
    out.innerHTML = "";
    if(this.pass == ""){
      const out = document.getElementById("pass") as HTMLParagraphElement;
      out.innerHTML = "* Please enter infomation";
    }
  }

  editcomfirm(){
    const out = document.getElementById("confirm") as HTMLParagraphElement;
    out.innerHTML = "";
    if(this.confirm == ""){
      const out = document.getElementById("confirm") as HTMLParagraphElement;
      out.innerHTML = "* Please enter infomation";
    }
  }
}
