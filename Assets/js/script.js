//'https://api.openweathermap.org/data/2.5/weather?q=fremont&units=metric&appid=c5f22b24220c2b11282d984a9ed0e2a0'
var APIKey = 'c5f22b24220c2b11282d984a9ed0e2a0';

var searchCityBtn = document.getElementById('searchBtn');
searchCityBtn.addEventListener('click',getDailyWeatherForcast);

//var city = document.getElementById('cityName').value;

function getDailyWeatherForcast(){
    

   var city = document.getElementById('cityName').value;
    if(!city){
        alert("Enter name of the city to Search")
    }
    else{
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=metric&appid=" 
        + APIKey)

        //console.log(url)
        .then(function(response){
            return  response.json();
        })
        .then(function(data){
            console.log(data);

            const {name} = data;
            const {temp} = data.main;
            const {humidity} = data.main;
            const {speed} = data.wind;    
            const {icon} = data.weather[0];
            const {lon} = data.coord;
            const {lat} = data.coord;
            
            console.log(name, temp, humidity, speed, icon,lon,lat); 
            
            document.getElementById('nameOfCity').innerText = name;
            document.getElementById('iconOfWeather').src = `http://openweathermap.org/img/wn/${icon}.png`
            document.getElementById('tempDisplay').innerText = temp;
            document.getElementById('windDisplay').innerText = speed;
            document.getElementById('humidityDisplay').innerText = humidity;
            document.getElementById('UVindex').innerText;

         //https://api.openweathermap.org/data/2.5/forecast?lat=-74.1724&lon=40.7357&appid=c5f22b24220c2b11282d984a9ed0e2a0

        var daysURL = fetch("https://api.openweathermap.org/data/2.5/forecast?lat="
        + lat
        + "&lon="
        + lon
        + "&appid="
        + APIKey)

  
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);

            var{dt_txt} = data.list[0];
            console.log(dt_txt);
            var{dt_txt}= data.list[5];
            console.log(dt_txt);
            var{dt_txt}= data.list[13];
            console.log(dt_txt);


        })
        
        })
    }         
    }







