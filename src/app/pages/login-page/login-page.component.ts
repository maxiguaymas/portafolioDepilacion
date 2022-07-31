import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm! : FormGroup;

  constructor(private formBuilder: FormBuilder, private _authLoginService: LoginService,private _router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user: ['',Validators.required],
      password: ['', Validators.required]
    });
  };

  get user(){
    return this.loginForm.get('user');
  }
  get password(){
    return this.loginForm.get('password');
  }

  submitLogin(){
    if(this.loginForm.valid){
      let {user,password} = this.loginForm.value;
      let response:string =this._authLoginService.authLogin(user,password);
      if(response.length > 0){
        sessionStorage.setItem('token',response);
        this._router.navigate(['/admin']);
      }
      else{
        alert("Cuenta incorrecta.");
        this.loginForm.reset();
      }
    }
  }

}
