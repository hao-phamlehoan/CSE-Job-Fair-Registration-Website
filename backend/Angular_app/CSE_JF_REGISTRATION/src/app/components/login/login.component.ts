import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  "formLogin": FormGroup
  isAuth: boolean = false;
  constructor(private fb: FormBuilder, private account: AccountService,private router: Router) {
    
      const token = localStorage.getItem('token');
     if(token){
      this.isAuth = true;
     };
    
   }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onLogin() {
    if (this.formLogin.invalid) {
      return false
    }
    // console.log(this.formLogin.value)
    this.account.login(this.formLogin.value).subscribe(res => {
      if(res.status === true){
        // Lưu mà token vào localStores
        localStorage.setItem('token',res.result)
        this.router.navigate(['/']);
      }else{
        alert("Thông tin đăng nhập không hợp lệ")
      }
    });
    return true
  }
  logout(): void{
    this.isAuth = false;
    localStorage.removeItem('token');
  }
}
