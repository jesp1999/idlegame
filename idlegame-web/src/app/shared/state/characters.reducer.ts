import { createReducer, on } from '@ngrx/store';

import { CharactersApiActions} from './characters.actions';
import { Character } from '../models/characters.model';

export const initialState: ReadonlyArray<Character> = [];

export const CharactersReducer = createReducer(
  initialState,
  on(CharactersApiActions.retrievedCharactersList, (_state, { characters }) => characters)
);
