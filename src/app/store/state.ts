import { resourcesReducer } from './reducers/resources.reducer';

export interface State {
  resources: any;
  error: any;
}
export const initialState: State = {
  resources: [],
  error: null,
};

export const reducers = {
  resources: resourcesReducer,
};
