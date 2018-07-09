const baseUrl = "http://localhost:4000";

export async function getCandies(){
    return await get(`${baseUrl}/candies`);
}

export async function updateSelectedCandy(candyName:string){
    return await patch(`${baseUrl}/candies/${candyName}`)
}

async function get(url:string){
    return fetch(url).then(async function(response) {
        return await response.json();
    })
}

async function patch(url:string){
    debugger;
    return fetch(url, {
        method: "PATCH",
    })
    .then(async function(response) {
        return await response.json();
    })
}
