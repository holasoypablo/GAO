// user.actions.ts
import { createAction, props } from '@ngrx/store';
import { Alien } from 'src/app/models/aliens.interface';

export const addAlien = createAction(
    '[Aliens List] Add alien',
    props<{alien:Alien}>()
);

export const retrievedAlienList = createAction(
    '[Alien List/API] retrieve Alien Success',
    props<{ aliens: ReadonlyArray<Alien>}>()
);