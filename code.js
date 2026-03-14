let userInput = document.querySelector(".user-input input");
let btn = document.querySelector(".user-input button");
let ville = document.querySelector(".ville h2");
let nature = document.querySelector(".ville p");
let temperature = document.querySelector(".tem h2");
let icontemperature = document.querySelector(".tem div");
let humiditer = document.querySelector(".humidite h3");
let vent  = document.querySelector(".vent h3");

let ressenti  = document.querySelector(".ressenti h3");
let API_KEY = "19be61ecb4a44c86929124348262502";

btn.addEventListener("click",()=>{
    const url =`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${userInput.value}`
    fetch(url)
    .then(Response => Response.json())
    .then(Date =>{
        console.log(Date);
        ville.innerHTML = Date.location.name
        nature.innerHTML = Date.current.condition.text;
        icontemperature.innerHTML = `<img src="${Date.current.condition.icon}">`
        temperature.innerHTML = `${Date.current.temp_c} °C`;
        vent.innerHTML = `${Date.current.wind_kph} Km/h`;
        humiditer.innerHTML = `${Date.current.humidity}%`
        ressenti.innerHTML = `${Date.current.feelslike_c}%`
    })
    
})