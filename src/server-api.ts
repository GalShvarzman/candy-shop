const baseUrl = "http://localhost:4000";

export async function getCandies(){
    return await get(`${baseUrl}/candies`);
}

async function get(url:string){
    return fetch(url).then(async function(response) {
        return await response.json();
    })
}
