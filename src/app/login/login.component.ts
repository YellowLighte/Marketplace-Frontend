import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(private userService: UserService) { }

  // showSuccess() {
  //   this.toastr.success('Success!', '', {positionClass: 'toast-bottom-center'});
  // }

  loginUser(): void {
    const user = { email: this.email, password: this.password };
    console.log(user);
    this.userService.loginUser(user);
  }

  ngOnInit(): void {
  }

}
