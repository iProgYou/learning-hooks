import React, { useState, useEffect } from 'react';

// https://samples.openweathermap.org/data/2.5/weather?zip=94607,us&appid=439d4b804bc8187953eb36d2a8c26a02

export default function Weather() {
    const [weather,setWeather] = useState(null)
    useEffect(() => {
        // let proxy = "https://cors-anywhere.herokuapp.com/"
        // let weather = "https://samples.openweathermap.org/data/2.5/weather?zip=94607,us&appid=439d4b804bc8187953eb36d2a8c26a02"
        // fetch(proxy + weather)
        //     .then(payload => payload.json())
        //     .then(payload => {
        //         console.log(payload)
        //         setWeather(payload)
        //     })
    })
    
    if (!weather) return null;
    return(
        <div>
            <h1>Here is the weather in {weather.name}</h1>
            <h3></h3>
        </div>
    )
}