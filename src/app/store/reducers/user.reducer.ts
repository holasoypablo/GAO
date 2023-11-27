import { createReducer, on } from '@ngrx/store';
import { addAlien, retrievedAlienList } from '../actions/alien.actions';
import { Alien } from 'src/app/models/aliens.interface';

export const initialState: ReadonlyArray<Alien> = [];

export const aliensReducer = createReducer(
    initialState,
    on(addAlien, (oldState,{alien})=>{
        return [...oldState, ...[alien]]
    }),
    on(retrievedAlienList, (oldState, {aliens})=>{
        return [...oldState,...aliens]
    })
);