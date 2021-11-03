import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyInterseptorService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const token = sessionStorage.getItem('token');
    let reqClone;
    if (token) {
      const headers = new HttpHeaders({
        authorization: `${token}`,
      });
      reqClone = req.clone({ headers });
    } else {
      reqClone = req;
    }

    return next.handle(reqClone);
  }
}
