import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }
//public API='../assets/om.json';
public ASP='../assets/db/employee/records.json';


 getData(){
  //     // return this.http.get('./om.json');
  //     //  return this.http.get('./om.json');
  //     //return this.http.get(this.API);
       return this.http.get(this.ASP);

    // return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
export class CardsServices{

 constructor(private http:HttpClient){}

 public Cards='../assets/aboutus.json';
 getdata(){
  return this.http.get(this.Cards);
}

}


