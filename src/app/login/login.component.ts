import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor(private Service:ServiceService,private router:Router) { }

  ngOnInit(){
    this.InitForm();
  }
  InitForm(){
   this.form=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
   })

  }
  loginproces(){
    if(this.form.valid){
      this.Service.login(this.form.value).subscribe(result=>{
        console.log(result);
        if(result){
          console.log(result);
          localStorage.setItem('accesstoken', result.accessToken.value),
          alert("success");
          if(result.role == "admin"){
            console.log(result.role);
            this.router.navigate(['home'])
          }
          else{
            this.router.navigate(['userhome'])
          }
        }else{
          alert("Failed");
        }
      })
    }
  }
}
