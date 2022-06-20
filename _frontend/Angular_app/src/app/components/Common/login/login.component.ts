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
  user: any;
  isAuth: boolean = false;
  isAdmin: boolean = false;
  constructor(private fb: FormBuilder, private account: AccountService,private router: Router) {
    
      const token = localStorage.getItem('token');
     if(token){
      this.user = JSON.parse(localStorage.getItem('user')!)
      this.isAuth = true;
      
    };
     if(localStorage.getItem('admin')=='true'){
      this.isAdmin=true;
     }
     
   }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(token){
      this.user = JSON.parse(localStorage.getItem('user')!)
      this.isAuth = true;
      
    };
     if(localStorage.getItem('admin')=='true'){
      this.isAdmin=true;
     }
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    console.log(this.user)
  }
  async onLogin() {
    if (this.formLogin.invalid) {
      return false
    }
    // console.log(this.formLogin.value)
    await this.account.login(this.formLogin.value).subscribe( async res =>  {
      if(res.status === true){
        // Lưu mà token vào localStores
        await localStorage.setItem('token',res.result)
        await localStorage.setItem('admin',res.isAdmin)
        this.account.check_token(res.result).subscribe(async res => {
          await localStorage.setItem('user', JSON.stringify(res.data.data.data))
        })
        this.router.navigate(['/']);
      }else{
        alert("Thông tin đăng nhập không hợp lệ")
      }    
    });
    window.location.reload()
    return true
  }
  logout(): void{
    this.isAuth = false;
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    localStorage.clear();
    window.location.reload()
  }
  
}
