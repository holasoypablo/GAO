import { createFeatureSelector } from "@ngrx/store";
import { Alien } from "src/app/models/aliens.interface";


export const selectAliens = createFeatureSelector<ReadonlyArray<Alien>>('aliens');