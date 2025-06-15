import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { inject } from '@angular/core';
import { AuthApiService } from '../../modules/auth/services/auth-api.service';

export function emailExistsValidator(): AsyncValidatorFn {
    const authApiService = inject(AuthApiService);
    return (control: AbstractControl): Observable<{ emailTaken: true } | null> => {
        if (!control.value) return of(null);

        return authApiService.checkEmail(control.value).pipe(
            map((res) => (res.exists ? ({ emailTaken: true } as const) : null)),
            catchError(() => of(null))
        );
    };
}
