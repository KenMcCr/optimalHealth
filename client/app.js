const suggest_button = document.querySelector(".recom_bttn");
const hero = document.querySelector("#hero_ID")
const suggest_window = document.querySelector("#suggest")
const x_button = document.querySelector(".x-button");
const elated = document.querySelector(".elated")
const tranquil = document.querySelector(".tranquil")
const gloomy = document.querySelector(".gloomy")
const html_songs = document.querySelector('#playlist_songs');
const spotBttn = document.querySelectorAll('#spotifyBttn');


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



const playlist_generator = async (event) => {

    var genre = event.target.dataset.genre;
    var playlist_ID;

    switch (genre){
        case "tranquil":
            playlist_ID = "6wObnEPQ63a4kei1sEcMdH"
            break
        case "elated":
            playlist_ID = "37i9dQZF1DWW5pQp5JqjY4"
            break
        case "gloomy":
            playlist_ID = "4C5u13rggsEdRN7An3A6uT"
            break
        default:
            return console.log("something wrong!")
    }

    console.log(genre)

    const clientId = "9603daa58de14596a5a42fdbd2280c54";
    const clientSecret = "0f92c144864746bcb889785f4fe1f0fa";

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
  
    const data = await result.json();
    const token = data.access_token;

    const playlist_result = await fetch(`https://api.spotify.com/v1/playlists/${playlist_ID}/tracks`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

    const playlist_data = await playlist_result.json();
    console.log(playlist_data);
    const playlist_songs = playlist_data.items;
    const playlist_ul = document.createElement('ul');
    playlist_songs.forEach(song => {
        const song_name = song.track.name;
        const song_li = document.createElement('li')
        song_li.innerText = song_name;
        song_li.classList.add('songs')
        playlist_ul.appendChild(song_li);
        
    });
    html_songs.appendChild(playlist_ul);
    
}

spotBttn.forEach((button) => {
    button.addEventListener('click', playlist_generator);
});



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

    //     const data = await result.json();
    //     return data.name;
    // }

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

