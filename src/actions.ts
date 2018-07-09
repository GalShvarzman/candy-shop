import { Dispatch } from 'redux';
import {getCandies, updateSelectedCandy} from './server-api';

export function loadAllCandies():any{
    return async (dispatch:Dispatch) => {
        try{
            const candies = await getCandies();
            dispatch(setCandies(candies));
        }
        catch (e) {

        }
    }
}

export function candySelected(candyName:string):any{
    return async (dispatch:Dispatch) => {
        try{
            const updatedCandy = await updateSelectedCandy(candyName);
            debugger;
            dispatch(setCandiesAfterSelect(updatedCandy));
        }
        catch (e) {

        }
    }
}

function setCandies(candies:{}[]){
    return{
        type: 'SET_CANDIES',
        candies
    }
}

function setCandiesAfterSelect(updatedCandy:{}){
    return{
        type: 'SET_CANDIES_AFTER_SELECT',
        updatedCandy
    }
}