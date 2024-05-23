import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from '../../models/users.model';

export const selectUsers = createFeatureSelector<ReadonlyArray<User>>('users');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<User>
>('collection');

export const selectCharacterCollection = createSelector(
  selectUsers,
  selectCollectionState,
  (users, collection) => {
    return collection?.map((user) => users.find((username) => user == username)!);
  }
);
