import { Action } from '@ngrx/store';
import { CounterActions, CounterActionTypes } from './actions';

export function counterReducer(state = 0, action: Action): number {
  switch (action.type) {
    case CounterActionTypes.Increment:
      return state + 1;
    case CounterActionTypes.Decrement:
      return state - 1;
    default:
      return state;
  }
}
