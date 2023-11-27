import { ActionReducerMap } from "@ngrx/store";
import { Alien } from "./models/aliens.interface";
import { aliensReducer } from "./store/reducers/user.reducer";

export interface AppState{
    aliens:ReadonlyArray<Alien>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    aliens:aliensReducer
}