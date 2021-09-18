import { combineReducers } from "redux";
import {count, character} from '.';

export const allReducers = combineReducers({
    count: count, 
    character: character})





