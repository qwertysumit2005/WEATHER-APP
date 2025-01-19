const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather.img');
const temperature = document.querySelector('.temperature');
const humidity = document.getElementById('.humidity');
const description = document.querySelector('.description');
const wind_speed = document.getElementById('wind-speed');

 async function checkWeather(city){
    const api_key = "f04c2976ae51918499bb20f83c37741c"
    const url = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${api_key}`;


   const weather_data = await  fetch(`${url}`).then(response =>response.json());

   
   temperature.innerHTML = `${ Math.round(weather_data.main.temp-273.15)}°C`;
   description.innerHTML = `${weather_data.waether[0].description}`;
   humidity.innerHTML = `${weather_data.main.humidity}%`;
   wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;

   switch(weather_data.weather[0].main){
        case 'Cloud':
            weather_img.scr = "/images/cloud.jpg";
            break;
            case 'Sun':
            weather_img.scr = "/images/sun.jpg";
            break;
            case 'Rain':
            weather_img.scr = "/images/rain.jpg";
            break;
            case 'Snow':
            weather_img.scr = "/images/snow.jpg";
            
   }

}
searchBtn.addEventListener('click', ()=>{
    checkWeatherListners(inputBox.value);
});