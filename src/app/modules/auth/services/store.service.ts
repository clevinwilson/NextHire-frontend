import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout, setUser } from '../../../store/actions/auth.actions';

@Injectable({ providedIn: 'root' })
export class StoreService {
    private store = inject(Store);

    setUser(user: any, token: string): void {
        this.store.dispatch(setUser({ user, token }));
    }

    removerUser(): void {
        this.store.dispatch(logout());
    }
}
