const {setCandies, setCandiesAfterSelect, setErrorMsg} = require ('./functions');

const options = {
    "SET_CANDIES" : setCandies,
    "SET_CANDIES_AFTER_SELECT" : setCandiesAfterSelect,
    "SET_ERROR_MSG" : setErrorMsg
};

function reducer(state:any, action:any){
    const handler = options[action.type];
    if(handler){
        return handler(state, action);
    }
    return state;
}

export default reducer;