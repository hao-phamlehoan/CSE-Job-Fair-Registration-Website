import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const api= 'http://localhost:3001/'
@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }
  
  all() : Observable<any> {
    return this.http.get<any>(api+ "business/all");
  }
  delete(id: number) : Observable<any> {
    console.log(api+ "business/del/"+id)
    return this.http.delete<any>(api+ "business/del/"+id);
  }
}
