import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const api= 'http://localhost:3001/'
@Injectable({
  providedIn: 'root'
})
export class ApproveService {

  constructor(private http: HttpClient) { }
  
  all() : Observable<any> {
    return this.http.get<any>(api+ "approve/all");
  }
  delete(id: number) : Observable<any> {
    return this.http.delete<any>(api+ "approve/del/"+id);
  }
}
