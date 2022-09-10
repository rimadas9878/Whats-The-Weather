var APIKey = 'c5f22b24220c2b11282d984a9ed0e2a0';
var store = eval(localStorage.cities) || [];

const handleHistory = city => {
    document.getElementById('cityName').value = city;
    getWeatherForcast();
};

const showHistory = () => {
    document.getElementById('history').innerHTML = '';

    store.forEach(city => {
        document.getElementById('history').innerHTML += `<button onclick="handleHistory('${city}')">${city}</button>`;
    });
};

showHistory();

var searchCityBtn = document.getElementById('searchBtn');
searchCityBtn.addEventListener('click', getWeatherForcast);


function getWeatherForcast() {

    var city = document.getElementById('cityName').value;
    if (!city) {
        alert("Enter name of the city to Search")
    }
    else {
        displayPerDayWeather();
        
    }

function displayPerDayWeather(){

    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    + city
    + "&units=metric&appid="
    + APIKey)

    //console.log(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        if(!store.includes(city)) {
            store.push(city);
            localStorage.cities = JSON.stringify(store);
            showHistory();
        }; 

        const { name } = data;
        const { temp } = data.main;
        const { humidity } = data.main;
        const { speed } = data.wind;
        const { icon } = data.weather[0];
        const { lat } = data.coord;
        const { lon } = data.coord;

        console.log(name, temp, humidity, speed, icon, lat, lon);

        document.getElementById('nameOfCity').innerText = name;
        document.getElementById('iconOfWeather').src = `http://openweathermap.org/img/wn/${icon}.png`
        document.getElementById('tempDisplay').innerText = temp;
        document.getElementById('windDisplay').innerText = speed;
        document.getElementById('humidityDisplay').innerText = humidity;
        document.getElementById('UVindex').innerText;

        fetch("https://api.openweathermap.org/data/2.5/forecast?lat="
                    + lat
                    + "&lon="
                    + lon
                    + "&units=metric&appid="
                    + APIKey)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data);
                        //37.5483 -121.9886

                        for(var i=0, j=1; i<40;i=i+8, j++){
                            var { dt } = data.list[i];
                            var { icon } = data.list[i].weather[0];
                            var { temp } = data.list[i].main;
                            var { speed } = data.list[i].wind;
                            var { humidity } = data.list[i].main;
                            console.log(dt, icon, temp, speed, humidity)
                            document.getElementById('getDay'+j+'Date').innerText = new Date(dt*1000).toDateString();
                            document.getElementById('day'+j+'Image').src = `http://openweathermap.org/img/wn/${icon}.png`;
                            document.getElementById('day'+j+'TemparatureDisplay').innerText = temp;
                            document.getElementById('day'+j+'WindDisplay').innerText = speed;
                            document.getElementById('day'+j+'HumidityDisplay').innerText = humidity;

                        }
                        

                        fetch("http://api.openweathermap.org/data/2.5/uvi?appid="
                            + APIKey
                            + "&lat="
                            + lat
                            + "&lon="
                            + lon
                        )
                            .then(function (response) {
                                return response.json();
                            })
                            .then(function (data) {
                                console.log(data);

                                var {lat} = data;
                                var {lon} = data;
                                var {value} = data;

                                console.log(lat, lon, value);

                                document.getElementById('UVindex').innerText = value;

                                if(value == 0 && value<=2){
                                    document.getElementById('UVindex').style.backgroundColor = "Green";
                                }

                                else if(value>2 && value <=5){
                                    document.getElementById('UVindex').style.backgroundColor = "Yellow";
                                }
                                else if(value>5 && value <=7){
                                    document.getElementById('UVindex').style.backgroundColor = "Orange";
                                }
                                else if(value>7 && value <=10){
                                    document.getElementById('UVindex').style.backgroundColor = "Red";
                                }
                                else{
                                    document.getElementById('UVindex').style.backgroundColor = "Violet";
                                }
                            })
                    })

            })


}
}

