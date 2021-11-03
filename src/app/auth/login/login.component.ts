import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { AuthServiceService } from 'src/app/_services/auth.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {}

  onLogin(user: User) {
    this.authService.login(user).subscribe((res) => {
      sessionStorage.setItem('token', res.token);
      console.log(res);
    });
  }
}
