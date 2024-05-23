import { createReducer, on } from '@ngrx/store';
import { UsersActions } from './users.actions';
import {User} from "../../models/users.model";

export const initialState: ReadonlyArray<User> = [];

export const UsersCollectionReducer = createReducer(
  initialState,
  on(UsersActions.removeUser, (state, { username }) =>
    state.filter((user) => username !== user)
  ),
  on(UsersActions.addUser, (state, { username }) => {
    if (state.indexOf(username) > -1) return state;

    return [...state, username];
  })
);
