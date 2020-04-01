import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    
   }
   getDetails() {
    return this.http.get('https://corona.lmao.ninja/countries');
  }
}
