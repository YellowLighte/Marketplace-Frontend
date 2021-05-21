import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

const herokuUrl = 'https://radiant-hamlet-21410.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: string;
  userName: string;
  searchSubject = new BehaviorSubject(null);

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  showSuccess(): void {
    this.toastr.success(`Success! Welcome to the Wasteland, ${this.userName}`, '', {positionClass: 'toast-bottom-center'});
  }

  registerUser(newUser): void {
    console.log(newUser);
    this.http
      .post(`${herokuUrl}/auth/users/register`, newUser)
      .subscribe( response => {
        this.userName = newUser.userName;
        this.showSuccess();
        this.router.navigate(['/login']);
      }, err => console.log(err));
  }

  loginUser(user): void {
    // console.log(user);
    this.http
      .post(`${herokuUrl}/auth/users/login`, user)
      .subscribe(response => {
        const token = response['jwt'];
        localStorage.setItem('currentUser', `${user.email}`);
        localStorage.setItem('token', `${token}`);

        this.currentUser = user.email;
        this.searchSubject.next(this.currentUser);
        this.router.navigate(['/home']);
      }, err => console.log(err));
  }

  logoutUser(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUser = null;
    this.searchSubject.next(this.currentUser);
    this.router.navigate(['/home']);
  }

}
