import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UIState } from '../reducers/ui.reducer';

export const selectUIState = createFeatureSelector<UIState>('ui');

export const selectIsLoading = createSelector(selectUIState, (state) => state.loading);
