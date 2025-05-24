const apiKey ="3abe06774e8a0fe3c43664aa378d08e2";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".input")
const searchButton = document.querySelector('.button-search')

async function checkWeather(city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);

        if(response.status == 404)
    {
              document.getElementById("pic").innerHTML='';
              document.getElementById("error").innerHTML = "error";
              document.getElementById("error1").innerHTML="--%";
              document.getElementById("error2").innerHTML="--km/h";
              document.getElementById("errorek").innerHTML=""
    }

    var data = await response.json();   

    document.querySelector('.weather-city').innerHTML=data.name;
    document.querySelector('.humidity-procent').innerHTML=data.main.humidity+"%";
    document.querySelector('.wind-procent').innerHTML=Math.round(data.wind.speed)+"km/h";
    document.querySelector('.weather-temp').innerHTML=Math.round(data.main.temp)+"°c";

    if(data.weather[0].main == "Clouds"){
        document.getElementById("pic").innerHTML='<img src="clouds.png" class="icons">';
    }else if(data.weather[0].main == "Clear"){
        document.getElementById("pic").innerHTML='<img src="clear.png" class="icons">';  
    }else if(data.weather[0].main == "Rain"){
        document.getElementById("pic").innerHTML='<img src="rain.png" class="icons">';  
    }else if(data.weather[0].main == "Drizzle"){
        document.getElementById("pic").innerHTML='<img src="drizzle.png" class="icons">';  
    }else if(data.weather[0].main == "Mist"){
        document.getElementById("pic").innerHTML='<img src="mist.png" class="icons">';
    }
}  
