import { createReducer, on } from '@ngrx/store';
import * as UIActions from '../actions/ui.actions';

export interface UIState {
    loading: boolean;
}

const initialState: UIState = {
    loading: false
};

export const uiReducer = createReducer(
    initialState,
    on(UIActions.startLoading, (state) => ({ ...state, loading: true })),
    on(UIActions.stopLoading, (state) => ({ ...state, loading: false }))
);
