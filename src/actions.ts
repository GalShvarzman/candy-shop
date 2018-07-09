import { Dispatch } from 'redux';
import {getCandies} from './server-api';

export function loadAllCandies():any{
    return async (dispatch:Dispatch) => {
        try{
            const contacts = await getCandies();
            dispatch(setCandies(contacts));
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