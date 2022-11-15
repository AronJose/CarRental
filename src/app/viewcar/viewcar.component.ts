import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-viewcar',
  templateUrl: './viewcar.component.html',
  styleUrls: ['./viewcar.component.css']
})
export class ViewcarComponent implements OnInit {
carList:any[];

  constructor(private router:Router,public service:ServiceService) { }

  ngOnInit(): void {
    this.getAllcars();
  }

  getAllcars(){
    this.service.getcar().subscribe((result:any)=>{
      this.carList=result;
    })
}

removecar(item:any): void{
  this.service.deletecar(item.contactId).subscribe({
    next:(result)=>{
      console.log(result);
      this.getAllcars();
    },
     error:(error)=>{
    }
})
}  

editcar(item:any){
debugger
this.router.navigate(['/edit',item.carId])
}
}