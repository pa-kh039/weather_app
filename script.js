let weather= {
    apikey: "dfa223624f34ec7001d6b2e0718d9dc8",
    fetchWeather: function(city){
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=metric&appid="
        + this.apikey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));

    },
    displayWeather: function(data){
        const { name } = data;
        const {icon , description} = data.weather[0];
        const { temp , humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerHTML="Weather in "+ name;
        document.querySelector(".icon").src="https://openweather.org/img/wn/icon"+icon+".png";
        document.querySelector(".description").innerHTML=description;
        document.querySelector(".temp").innerHTML=temp+"°C";
        document.querySelector(".humidity").innerHTML="Humidity: "+humidity+"%";
        document.querySelector(".wind").innerHTML="Wind speed:"+speed+"km/h";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
    
})












