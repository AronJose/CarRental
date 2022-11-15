import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // newitem(value:any){
  //   throw new Error('Method not implemented');
  // }

  constructor(private http:HttpClient) { }

  login(data:boolean):Observable<any>{
    return this.http.post(environment.baseUrl + '/login',data);
  }

  userreg(data:boolean):Observable<any>{
    return this.http.post(environment.baseUrl + '/users',data);
  }

  addcar(data:any):Observable<any>{
    let tocken=localStorage.getItem('accesstoken')
    let  head_obj=new HttpHeaders({"Authorization":"Contacts " + tocken})
    return this.http.post(environment.baseUrl + '/cars',data,{headers:head_obj});
  }

  getcar():Observable<any>{
    let tocken=localStorage.getItem('accesstoken')
    let  head_obj=new HttpHeaders({"Authorization":"Contacts " + tocken})
    return this.http.get(environment.baseUrl + '/cars',{});
  }

  deletecar(carId:any){
    let tocken=localStorage.getItem('accesstoken')
    let  head_obj=new HttpHeaders({"Authorization":"Contacts " + tocken})
    return this.http.delete(environment.baseUrl + '/cars/'+ carId,{headers:head_obj});
  }

  getcarById(carId:any):Observable<any>{
    let tocken=localStorage.getItem('accesstoken')
    let  head_obj=new HttpHeaders({"Authorization":"Contacts " + tocken})
    return this.http.get(environment.baseUrl + '/cars/'+ carId,{headers:head_obj});
  }

  updatecar(item:any,carId:any):Observable<any>{
    let tocken=localStorage.getItem('accesstoken')
    let  head_obj=new HttpHeaders({"Authorization":"Contacts " + tocken})
    return this.http.put(environment.baseUrl + '/cars/'+ carId,item,{headers:head_obj});

  }
}
