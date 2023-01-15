import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthService) {}
  
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let currentUser = this.authenticationService.UsuarioAutenticado;
    if (currentUser && currentUser.value) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ${currentUser.value}',
        },
      });
    }
    return next.handle(req);
  }
}
