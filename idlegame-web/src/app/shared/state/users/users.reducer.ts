import { createReducer, on } from '@ngrx/store';

import { UsersApiActions} from './users.actions';
import { User } from '../../models/users.model';

export const initialState: ReadonlyArray<User> = [];

export const UsersReducer = createReducer(
  initialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(UsersApiActions.retrievedUsersList, (_state, { users }) => users)
);
