import { combineReducers } from "redux";
import {count, character, toggle} from './';

export const allReducers = combineReducers({
    count: count, 
    character: character,
    toggle: toggle
})





