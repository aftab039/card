import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CardsServices{

 constructor(private http:HttpClient){}

 public Cards='../assets/aboutus.json';
 getdata(){
  return this.http.get(this.Cards);
}

}


