import { ActionReducer } from '@ngrx/store';

import { AppState } from '../app.state';
import { initialState as initialAuthState } from '../reducers/auth.reducer';
import { initialState as initialUIState } from '../reducers/ui.reducer';

const initialState: AppState = {
    auth: initialAuthState,
    ui: initialUIState
};

const STATE_KEYS_TO_PERSIST: (keyof AppState)[] = ['auth'];
const STORAGE = localStorage;
const STORAGE_KEY = 'ngrx_app_state';

/**
 * Meta-reducer to synchronize NgRx state with localStorage.
 * - On app initialization, it attempts to load state from localStorage.
 * - After every action, it saves specified state slices to localStorage.
 */
export function localStorageSyncReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return function (state: AppState | undefined, action: any): AppState {
        if (state === undefined) {
            try {
                const storedState = STORAGE.getItem(STORAGE_KEY);
                if (storedState) {
                    const parsedState = JSON.parse(storedState);
                    const rehydratedState: Partial<AppState> = {};

                    for (const key of STATE_KEYS_TO_PERSIST) {
                        if (parsedState[key]) {
                            rehydratedState[key] = parsedState[key];
                        }
                    }
                    console.log('NgRx: State rehydrated from localStorage. Only Auth slice will be present.', rehydratedState);
                    return { ...initialState, ...rehydratedState } as AppState;
                }
            } catch (e) {
                console.error('NgRx: Error loading state from localStorage', e);
            }
        }

        const nextState = reducer(state, action);
        try {
            const stateToPersist: Partial<any> = {};
            for (const key of STATE_KEYS_TO_PERSIST) {
                if (nextState && nextState[key]) {
                    stateToPersist[key] = nextState[key];
                }
            }
            STORAGE.setItem(STORAGE_KEY, JSON.stringify(stateToPersist));
        } catch (e) {
            console.error('NgRx: Error saving state to localStorage', e);
        }

        return nextState;
    };
}
