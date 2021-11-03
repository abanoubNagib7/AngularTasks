import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { AuthServiceService } from 'src/app/_services/auth.service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user?: User;
  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {}

  onRegister(form: User) {
    this.authService.register(form).subscribe((res) => console.log(res))
  }
}
