import { createReducer, on, State } from '@ngrx/store';
import {
  loadResourceFail,
  loadResourceSuccess,
} from '../action/resources.actions';

export const initialState: any = [];

export const resourcesReducer = createReducer(
  initialState,
  on(loadResourceSuccess, (state, { data }) => ({
    ...state,
    resources: data,
  })),
  on(loadResourceFail, (state, { error }) => ({ ...state, error: error }))
);
