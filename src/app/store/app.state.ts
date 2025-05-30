import { AuthState } from './reducers/auth.reducer';
import { UIState } from './reducers/ui.reducer';

export interface AppState {
    auth: AuthState;
    ui: UIState;
    //   notifications: NotificationState;
}
