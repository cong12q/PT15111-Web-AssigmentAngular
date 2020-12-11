import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private router: Router, private authService: AuthenticationService) {
    this.authService.logout();
    //xóa localstorage
    // localStorage.removeItem('currentUser');
    //điều hướng web về login
    this.router.navigate(['login']);
   }

  ngOnInit(): void {
  }

}
