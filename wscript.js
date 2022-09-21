// import { createClient } from 'pexels' ;



// let image={
//     apikey:"563492ad6f9170000100000167b5b80fc643453f9b0225d28a2e257b",
//     // pexels api_key
//     fetchImage: function(topic){
        
//         const client = createClient('563492ad6f9170000100000167b5b80fc643453f9b0225d28a2e257b');
//         const {query} = topic;
//         // console.log(query);
//         client.photos.search({ query, per_page: 1 }).then((photos) => photos.json())
//         .then((data) => this.setbg(data));
//         // All requests made with the client will be authenticated
        
//     },
//      setbg: function(photos){
//         const {url}=photos[0];
//         document.body.style.backgroundImage="url(url)";
//         // console.log(photos);
//      }
// };

let weather= {
    // unsplash api_key
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
        // image.fetchImage(name);
        // console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerHTML="Weather in "+ name;
        document.querySelector(".icon").src="https://openweather.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerHTML=description;
        document.querySelector(".temp").innerHTML=temp+"°C";
        document.querySelector(".humidity").innerHTML="Humidity: "+humidity+"%";
        document.querySelector(".wind").innerHTML="Wind speed:"+speed+"km/h";
        document.querySelector(".weather").classList.remove("loading");
        
        
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+name+"')";
    },
    
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click",function(){
    weather.search();

})

document.querySelector(".search-bar")
.addEventListener("keyup",function(event){
    if(event.key=="Enter")
    {
        weather.search();
    }
});












