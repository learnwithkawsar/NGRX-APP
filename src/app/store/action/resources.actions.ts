import { createAction, props } from '@ngrx/store';

export const loadResource = createAction('[Resource] Load Resources');
export const loadResourceSuccess = createAction(
  '[Resource] Load Resources Success',
  props<{ data: any }>()
);
export const loadResourceFail = createAction(
  '[Resource] Load Resources Fail',
  props<{ error: any }>()
);
