import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const api= 'http://localhost:3001/'
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  
  all() : Observable<any> {
    return this.http.get<any>(api+ "register/all");
  }
  delete(id: number) : Observable<any> {
    return this.http.delete<any>(api+ "register/del/"+id);
  }
}
