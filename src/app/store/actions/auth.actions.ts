import { createAction, props } from '@ngrx/store';

export const setUser = createAction('[Auth] Login Success', props<{ user: any; token: string | null }>());

export const logout = createAction('[Auth] Logout');
