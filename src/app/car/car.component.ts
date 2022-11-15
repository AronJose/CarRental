import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
car:FormGroup;
  constructor(private service:ServiceService,public router:Router) { }

  ngOnInit(): void {
    this.InitForm();
  }

  InitForm(){
    this.car=new FormGroup({
      carname:new FormControl('',[Validators.required]),
      carmodel:new FormControl('',[Validators.required]),
      registerNo:new FormControl('',[Validators.required]),
      fueltype:new FormControl('',[Validators.required]),
      colour:new FormControl('',[Validators.required]),
      rate:new FormControl('',[Validators.required]),
      kilometer:new FormControl('',[Validators.required])
    })
  }

  carreg(){
    if(this.car.valid){
      this.service.addcar(this.car.value).subscribe(result =>{
        if(result){
         console.log(result);
          // this.router.navigate(['']);
          alert('success') 
          this.car.reset();
        }else{
          alert("Failed");
        }
      })
    }
  }
}

