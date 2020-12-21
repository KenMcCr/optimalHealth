const suggest_button = document.querySelector(".recom_bttn");
const hero = document.querySelector("#hero_ID")
const suggest_window = document.querySelector("#suggest")
const x_button = document.querySelector(".x-button");
const elated = document.querySelector(".elated")
const tranquil = document.querySelector(".tranquil")
const gloomy = document.querySelector(".gloomy")
const elated_songs = document.querySelector("#elated")
const tranquil_songs = document.querySelector("#tranquil")
const gloomy_songs = document.querySelector("#gloomy")


suggest_button.addEventListener('click', (event) => {
    if (hero.classList.contains("hero")){
        hero.classList.remove("hero");
        hero.classList.add("hero_suggest_active")
    } 

    suggest_window.classList.replace("recommendations_hidden", "recommendations");
})

x_button.addEventListener('click', (event)=>{
    hero.classList.replace("hero_suggest_active", "hero");
    suggest_window.classList.replace("recommendations", "recommendations_hidden")
})

elated.addEventListener('click', (event) => {
    elated_songs.classList.toggle('elated_songs_show')
    elated_songs.classList.toggle('elated_songs')
})

tranquil.addEventListener('click', (event) => {
    tranquil_songs.classList.toggle('tranquil_songs_show')
    tranquil_songs.classList.toggle('tranquil_songs')
})

gloomy.addEventListener('click', (event) => {
    gloomy_songs.classList.toggle('gloomy_songs_show')
    gloomy_songs.classList.toggle('gloomy_songs')
})


// const ApCont = (function(){

//     const clientId = '9603daa58de14596a5a42fdbd2280c54';
//     const clientSecret = '0f92c144864746bcb889785f4fe1f0fa';

//     const _getToken = async () => {

//         const result = await fetch('https://accounts.spotify.com/api/token', {
//             method: 'POST',
//             headers: {
//                 'Content-Type' : 'application/x-www-form-urlencoded', 
//                 'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
//             },
//             body: 'grant_type=client_credentials'
//         });
//         const data = await result.json();
//         return data.access_token;
//     }

    // const _getTracks = async (token) => {
    //     const result = await fetch("https://api.spotify.com/v1/playlists/6wObnEPQ63a4kei1sEcMdH/tracks", {
    //         method: 'GET',
    //         headers: { 'Authorization' : 'Bearer ' + token}
    //     });

//         const data = await result.json();
//         return data.name;
//     }

//     const _getPlaylist = async (token) => {
//         const limit = 10;

//         const result = await fetch(`https://api.spotify.com/v1/playlists/6wObnEPQ63a4kei1sEcMdH`, {
//             method: 'GET',
//             headers: { 'Authorization' : 'Bearer ' + token}
//         })

//         const data = await result.json();
//         return data.playlists;
//     }
//     return {
//         getToken() {
//             return _getToken();
//         }
//         // getTracks() {
//         //     return _getTracks();
//         // },
//         // getPlaylist() {
//         //     return _getPlaylist();
//         // }
//     }
// })();

// const UIController = (function(){
//     const DOMElements = {
//         hfToken: "#hidden_token"
//     }

//     return {
//         storeToken(value) {
//             document.querySelector(DOMElements.hfToken).value = value;
//         },
//         getStoreToken(){
//             return {
//                 token: document.querySelector(DOMElements.hfToken).value
//             }
//         }
//     }
// })()


// const hfToken = document.querySelector("#hidden_token")

// const loadToken = async () =>  {
//     const token = await ApCont.getToken();
// }

// const loadGenres = async () => {
//     //get the token
//     const token = await ApCont.getToken();        
//     //store the token onto the page
//     // UICtrl.storeToken(token);
//     //get the genres
//     UIController.storeToken(token)
//     const genres = await ApCont.getTracks(token);
//     const playlist = await ApCont.getPlaylist(token);
//     //populate our genres select element
//     // genres.forEach(element => UICtrl.createGenre(element.name, element.id));
//     // return genres;
//     console.log(ApCont.getPlaylist(token))
    
// }

// loadGenres();

