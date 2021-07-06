import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  User={
    name:'',
    email:'',
    password:'',
    confirmpass:''
  }
  errormsg:any
  pwdSt:any
  txtcolr:any
  constructor(private booksService:BooksService,private router: Router){}

  AddUser()
  {    
    if (this.User.confirmpass===this.User.password) {
      this.booksService.newUser(this.User);
      console.log("Called");    
      alert("Success");
      this.router.navigate(['/login']);
    } else {
      this.errormsg="Password Doesn't match";
    }
  }
  ngOnInit(): void {
  }

  validatepassword(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])(?=.*\\W))|((?=.*[a-z])(?=.*[0-9])(?=.*\\W))|((?=.*[A-Z])(?=.*[a-z])(?=.*\\W))).*$", "g");
    var enoughRegex = new RegExp("(?=.{5,}).*", "g");

   if(false === enoughRegex.test(this.User.password)){
    this.pwdSt="More character";
    this.txtcolr="text-info";
    
   }
   else if(strongRegex.test(this.User.password)){
    this.pwdSt="Strong";
    this.txtcolr="text-success";
     
         
   }
   else if(mediumRegex.test(this.User.password)){
    this.pwdSt="Medium";
    this.txtcolr="text-warning";
    
   }
   else{
    this.pwdSt="Poor";
    this.txtcolr="text-danger";
   
   } 
  }


}
