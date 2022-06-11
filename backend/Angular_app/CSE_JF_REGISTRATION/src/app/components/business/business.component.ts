import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  isAuth: boolean = false;
  constructor(){
    const token = localStorage.getItem('token');
    if(token){
      this.isAuth=true
    };
  }
  ngOnInit(): void {
    //this.isAuth = true;
  }

}
