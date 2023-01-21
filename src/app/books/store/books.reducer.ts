import { createReducer, on } from '@ngrx/store';
import { Books } from './books';
import { booksFetchAPISuccess, saveNewBookAPISucess } from './books.action';

export const iniitialState: ReadonlyArray<Books> = [];
export const bookReducer = createReducer(
  iniitialState,
  on(booksFetchAPISuccess, (state, { allBooks }) => allBooks),
  on(saveNewBookAPISucess, (state, { newBook }) => {
    let newState = [...state];
    newState.unshift(newBook);
    return newState;
  })
);
