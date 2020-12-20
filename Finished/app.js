const suggest_button = document.querySelector(".recom_bttn");
const hero = document.querySelector("#hero_ID")
const suggest_window = document.querySelector("#suggest")
const x_button = document.querySelector(".x-button");

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