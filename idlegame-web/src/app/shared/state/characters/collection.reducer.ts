import { createReducer, on } from '@ngrx/store';
import { CharactersActions } from './characters.actions';
import {Character} from "../../models/characters.model";

export const initialState: ReadonlyArray<Character> = [];

export const CollectionReducer = createReducer(
  initialState,
  on(CharactersActions.removeCharacter, (state, { characterName }) =>
    state.filter((character) => character !== characterName)
  ),
  on(CharactersActions.addCharacter, (state, { characterName }) => {
    if (state.indexOf(characterName) > -1) return state;

    return [...state, characterName];
  })
);
