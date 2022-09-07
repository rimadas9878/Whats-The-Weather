var APIKey = 'c5f22b24220c2b11282d984a9ed0e2a0';

var searchCityBtn = document.getElementById('searchBtn');
searchCityBtn.addEventListener('click', getWeatherForcast);
var days = 5;


function getWeatherForcast() {

    var city = document.getElementById('cityName').value;
    if (!city) {
        alert("Enter name of the city to Search")
    }
    else {
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


                        var { dt_txt } = data.list[0];
                        var { icon } = data.list[0].weather[0];
                        var { temp } = data.list[0].main;
                        var { speed } = data.list[0].wind;
                        var { humidity } = data.list[0].main;
                        console.log(dt_txt, icon, temp, speed, humidity)
                        document.getElementById('getDay1Date').innerText = dt_txt;
                        document.getElementById('day1Image').src = `http://openweathermap.org/img/wn/${icon}.png`;
                        document.getElementById('day1TemparatureDisplay').innerText = temp;
                        document.getElementById('day1WindDisplay').innerText = speed;
                        document.getElementById('day1HumidityDisplay').innerText = humidity;


                        var { dt_txt } = data.list[8];
                        var { icon } = data.list[8].weather[0];
                        var { temp } = data.list[8].main;
                        var { speed } = data.list[8].wind;
                        var { humidity } = data.list[8].main;
                        console.log(dt_txt, temp, speed, humidity)
                        document.getElementById('getDay2Date').innerText = dt_txt;
                        document.getElementById('day2Image').src = `http://openweathermap.org/img/wn/${icon}.png`;
                        document.getElementById('day2TemparatureDisplay').innerText = temp;
                        document.getElementById('day2WindDisplay').innerText = speed;
                        document.getElementById('day2HumidityDisplay').innerText = humidity;

                        var { dt_txt } = data.list[16];
                        var { icon } = data.list[16].weather[0];
                        var { temp } = data.list[16].main;
                        var { speed } = data.list[16].wind;
                        var { humidity } = data.list[16].main;
                        console.log(dt_txt, temp, speed, humidity)
                        document.getElementById('getDay3Date').innerText = dt_txt;
                        document.getElementById('day3Image').src = `http://openweathermap.org/img/wn/${icon}.png`;
                        document.getElementById('day3TemparatureDisplay').innerText = temp;
                        document.getElementById('day3WindDisplay').innerText = speed;
                        document.getElementById('day3HumidityDisplay').innerText = humidity;

                        var { dt_txt } = data.list[24];
                        var { icon } = data.list[24].weather[0];
                        var { temp } = data.list[24].main;
                        var { speed } = data.list[24].wind;
                        var { humidity } = data.list[24].main;
                        console.log(dt_txt, temp, speed, humidity)
                        document.getElementById('getDay4Date').innerText = dt_txt;
                        document.getElementById('day4Image').src = `http://openweathermap.org/img/wn/${icon}.png`;
                        document.getElementById('day4TemparatureDisplay').innerText = temp;
                        document.getElementById('day4WindDisplay').innerText = speed;
                        document.getElementById('day4HumidityDisplay').innerText = humidity;

                        var { dt_txt } = data.list[32];
                        var { icon } = data.list[32].weather[0];
                        var { temp } = data.list[32].main;
                        var { speed } = data.list[32].wind;
                        var { humidity } = data.list[32].main;
                        console.log(dt_txt, temp, speed, humidity)
                        document.getElementById('getDay5Date').innerText = dt_txt;
                        document.getElementById('day5Image').src = `http://openweathermap.org/img/wn/${icon}.png`;
                        document.getElementById('day5TemparatureDisplay').innerText = temp;
                        document.getElementById('day5WindDisplay').innerText = speed;
                        document.getElementById('day5HumidityDisplay').innerText = humidity;

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