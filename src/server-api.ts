const baseUrl = "http://localhost:4000";

export async function getCandies(){
    return await get(`${baseUrl}/candies`);
}

export async function updateSelectedCandy(candyName:string){
    return await patch(`${baseUrl}/candies/${candyName}`)
}

async function get(url:string){
    return fetch(url).then(async function(response) {
        if(response.status >= 200 && response.status < 300) {
            return await response.json();
        }
        throw new Error("Failed to fetch");
    })
}

async function patch(url:string){
    debugger;
    return fetch(url, {
        method: "PATCH",
    })
    .then(async function(response) {
        if(response.status >= 200 && response.status < 300){
            return await response.json();
        }
        throw new Error("Failed to fetch");
    })
}
