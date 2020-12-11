import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor{

    constructor(private authenticationService: AuthenticationService){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        
        let currentUser = this.authenticationService.currentUserValue;
        if(currentUser && currentUser.jwt){
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.jwt}`
                }
            })
        }

        return next.handle(request);
    }

}