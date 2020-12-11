import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';

import {AuthenticationService} 
    from '../../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  identifier="";
  password="";
  redirectToUrl = "";
  loginForm: FormGroup;
  submit = false;
  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService) { 
      // nếu đã có currentuser ở localstorage rồi thì
      // điều hướng về trang chủ
      const currentUser = this.authenticationService.currentUser;
      if(currentUser){
        this.router.navigate(['/admin']);
      }
      this.route.queryParams.subscribe(params => {
        this.redirectToUrl = params['returnUrl'];
      });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get loginFormControl(){
    return this.loginForm.controls;
  }

  ajaxLogin(){
    
    this.authenticationService.login(this.identifier, this.password)
        .pipe(first())
        .subscribe(data => {
          console.log(data);
          console.log(this.redirectToUrl)
          this.router.navigate([this.redirectToUrl]);
        })
  }

  loginFormSubmit(){
    if(this.loginForm.valid){
      this.submit = true;
      this.authenticationService.login(this.loginForm.value.identifier, this.loginForm.value.password)
        .pipe(first())
        .subscribe(data => {
          if(data != undefined){
            this.router.navigate(['/admin']);
          }else{
            alert('Sai tài khoản/mật khẩu');
          }
        })
    }
  }

}