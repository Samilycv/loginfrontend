import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //login api function
  login(username: any, password: any,year:any) {
    const body = {
      username,
      password,
      year
    }
    return this.http.post('http://localhost:5000/login', body)

  }
  // getdata(): Observable<any> {
  //   // Make a GET request to the API endpoint
  //   return this.http.get<any>('https://dotnetacademy.in/Item.ashx');
  // }


  
}
