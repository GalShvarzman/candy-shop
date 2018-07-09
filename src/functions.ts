export function setCandies(state:any, action:any){
    return{
        ...state,
        candies:action.candies
    }
}

export function setCandiesAfterSelect(state:any, action:any){
    const updatedCandy = action.updatedCandy;
    const candiesClone = [...state.candies];
    const candyIndex = candiesClone.findIndex((candy)=>{
        return candy.candyName === updatedCandy.candyName
    });
    if(candyIndex !== -1){
        candiesClone[candyIndex] = updatedCandy;
        return{
            ...state,
            candiesClone
        }
    }
}