import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
editcar:FormGroup;
id:any;
carId:any;
  constructor(private service:ServiceService,public activerouter:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.InitForm();
    this.activerouter.params.subscribe((param:any)=>
    {
      this.carId=param['id'];
      this.getcarById();
      
    })

  }
  InitForm(){
    this.editcar=new FormGroup({
      carname:new FormControl('',[Validators.required]),
      carmodel:new FormControl('',[Validators.required]),
      registerNo:new FormControl('',[Validators.required]),
      fueltype:new FormControl('',[Validators.required]),
      colour:new FormControl('',[Validators.required]),
      rate:new FormControl('',[Validators.required]),
      kilometer:new FormControl('',[Validators.required])
     
    })
  }
  getcarById(){
    this.service.getcarById(this.carId).subscribe({
      next:(result)=>{
        this.carId=result.contactId;
        this.editcar.controls['carname'].setValue(result.carname),
        this.editcar.controls['carmodel'].setValue(result.carmodel),
        this.editcar.controls['registerNo'].setValue(result.registerNo),
        this.editcar.controls['fueltype'].setValue(result.fueltype),
        this.editcar.controls['colour'].setValue(result.colour),
        this.editcar.controls['rate'].setValue(result.rate),
        this.editcar.controls['kilometer'].setValue(result.kilometer)
        console.log(result);
      },
      error:(msg)=>{}
        
      })
  }
  updatecar(){
    if(this.editcar.valid){
      this.service.updatecar(this.editcar.value,this.carId).subscribe({
        next:(result: any)=>{
          this.router.navigate(['/viewcar'])
          console.log(result);
        },
        error:(msg)=>{}
      })
    }
  }
}
