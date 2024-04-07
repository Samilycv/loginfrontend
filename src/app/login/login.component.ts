import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private api:ApiService,private loginRouter:Router) {}
  ngOnInit(): void {
  }

  loginForm=this.fb.group({
    username:['', [Validators.required]],
    password:['', [Validators.required, Validators.pattern('[0-9]*')]],
    year:['', [Validators.required]],
  })

  login(){
    if(this.loginForm.valid){

      let username=this.loginForm.value.username
      let password=this.loginForm.value.password
      let year=this.loginForm.value.year
      this.api.login(username,password,year).subscribe((response:any)=>{
        console.log(response);
        //alert('Login Successful')
        this.loginRouter.navigateByUrl('/product')
      })
      
    }

    
    else{
      alert("Invalid login form")
    }
  }
}
