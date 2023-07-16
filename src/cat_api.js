const url = 'https://api.thecatapi.com/v1';
const api_key = "live_AiJ15d8vns5Dbvi5YDTHWayRpLdNpZ2V0oVmbma5PWCHGJk8mN3LVpwS2rt0Kavq";

// export function fetchBreeds() {
//     return fetch(`${url}/breeds?api_key=${api_key}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         });       
// };

// export function fetchCatByBreed(breedId) {
//     return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         });  
// };

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
    .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });       
};

export function fetchCatByBreed(breedId) {
        return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
.then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
});
};