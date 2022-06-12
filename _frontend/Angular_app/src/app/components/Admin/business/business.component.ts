import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  isAuth: boolean = false;
  data:any;
  subjectform = this.fb.group({
    
  });
  constructor(
    private business: BusinessService,
    private fb:FormBuilder
  ){
    const token = localStorage.getItem('token');
    if(token){
      this.isAuth=true
    };
  }
  refresh(){
    this.business.all().subscribe(res => {
      this.data=res.result;
    })
  }
  ngOnInit(): void {
    this.business.all().subscribe(res => {
      this.data=res.result;
    })
  }
  onEdit(is: number){
    alert("Clicked on button")
  }
  onDelete(id: number){
    this.business.delete(id).subscribe(res => {
      this.refresh();
    })
  }
  onSubmit(){

  }
  ngDestroy(){

  }

}
