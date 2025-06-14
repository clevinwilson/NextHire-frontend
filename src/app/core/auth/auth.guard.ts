import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';

import { API_ENDPOINTS, API_SEGMENTS } from '../api.constants';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.isAuthenticated$.pipe(
            take(1), // Take the latest value and complete
            map((isAuthenticated) => {
                if (isAuthenticated) {
                    return true; 
                } else {
                    console.warn('AuthGuard: User not authenticated. Redirecting to login.');
                    return this.router.createUrlTree([`/${API_SEGMENTS.AUTH}/${API_ENDPOINTS.AUTH.LOGIN}`]);
                }
            })
        );
    }
}
