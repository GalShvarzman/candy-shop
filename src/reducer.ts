const {setCandies} = require ('./functions');

const options = {
    "SET_CANDIES": setCandies
};

function reducer(state:any, action:any){
    const handler = options[action.type];
    if(handler){
        return handler(state, action);
    }
    return state;
}

export default reducer;