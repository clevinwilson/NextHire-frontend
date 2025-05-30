import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export interface AuthState {
    isAuthenticated: boolean;
    user: any;
    token: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    token: null
};

export const authReducer = createReducer(
    initialState,
    on(AuthActions.loginSuccess, (state, { user, token }) => ({
        ...state,
        isAuthenticated: true,
        user,
        token
    })),
    on(AuthActions.logout, (state) => initialState)
);
