
const API_KEY = "dcd52ed2727e576b4d85ffdebaf74595";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.wether[0].main;
    });
}
function onGeoError() {}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);