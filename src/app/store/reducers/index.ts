import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../app.state';
import { authReducer } from './auth.reducer';
import { uiReducer } from './ui.reducer';

export const reducers: ActionReducerMap<AppState> = {
    auth: authReducer,
    ui: uiReducer
};
