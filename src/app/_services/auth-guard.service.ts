import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth.service.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthServiceService) {}

  canActivate() {
    return this.authService.isAuthunticated();
  }
}
