import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Character } from '../models/characters.model';

export const selectCharacters = createFeatureSelector<ReadonlyArray<Character>>('characters');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<Character>
>('collection');

export const selectCharacterCollection = createSelector(
  selectCharacters,
  selectCollectionState,
  (characters, collection) => {
    return collection?.map((name) => characters.find((character) => character == name)!);
  }
);
