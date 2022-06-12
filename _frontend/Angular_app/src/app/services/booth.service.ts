import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const api= 'http://localhost:3001/'
@Injectable({
  providedIn: 'root'
})
export class BoothService {

  constructor(private http: HttpClient) { }
  
  all() : Observable<any> {
    return this.http.get<any>(api+ "booth/all");
  }
  delete(id: number) : Observable<any> {
    console.log(api+ "booth/del/"+id)
    return this.http.delete<any>(api+ "booth/del/"+id);
  }
}
