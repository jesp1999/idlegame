import { createActionGroup, props } from '@ngrx/store';
import { Character } from '../models/characters.model';

export const CharactersActions = createActionGroup({
  source: 'Characters',
  events: {
    'Add Character': props<{ characterName: Character }>(),
    'Remove Character': props<{ characterName: Character }>(),
    'Set Characters': props<{ characters: Character[] }>(),
  },
});

export const CharactersApiActions = createActionGroup({
  source: 'Characters API',
  events: {
    'Retrieved Characters List': props<{ characters: ReadonlyArray<Character> }>(),
  },
});
