import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user:FormGroup;

  constructor(private service:ServiceService,public router:Router) { }

  ngOnInit(): void {
    this.InitForm();
  }

  InitForm(){
    this.user=new FormGroup({
      firstname:new FormControl('',[Validators.required]),
      lastname:new FormControl('',[Validators.required]),
      dob:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      gender:new FormControl('',[Validators.required]),
      adharnumber:new FormControl('',[Validators.required]),
      licencenumber:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      role:new FormControl('',[Validators.required])
    })
  }

  userreg(){
    if(this.user.valid){
      this.service.userreg(this.user.value).subscribe(result =>{
        if(result){
          this.router.navigate(['']);
          alert('success') 
          this.user.reset();
        }else{
          alert("Failed");
        }
      })
    }
  }

}
