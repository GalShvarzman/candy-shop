import { Dispatch } from 'redux';
import {getCandies, updateSelectedCandy} from './server-api';

export function loadAllCandies():any{
    return async (dispatch:Dispatch) => {
        try{
            const candies = await getCandies();
            dispatch(setCandies(candies));
        }
        catch (e) {
            dispatch(setErrorMsg("Load candies failed"))
        }
    }
}

export function candySelected(candyName:string):any{
    return async (dispatch:Dispatch) => {
        try{
            const updatedCandy = await updateSelectedCandy(candyName);
            dispatch(setCandiesAfterSelect(updatedCandy));
        }
        catch (e) {
            dispatch(setErrorMsg("Process failed"))
        }
    }
}

function setCandies(candies:{}[]){
    return{
        type: 'SET_CANDIES',
        candies
    }
}

function setErrorMsg(errorMsg:string){
    return{
        type:'SET_ERROR_MSG',
        errorMsg
    }
}

function setCandiesAfterSelect(updatedCandy:{}){
    return{
        type: 'SET_CANDIES_AFTER_SELECT',
        updatedCandy
    }
}