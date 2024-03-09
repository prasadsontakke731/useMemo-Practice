import React from 'react'
import "./WeatherApp.css"

import clear from "../Assets/clear.png"
import cloud from "../Assets/cloud.png"
import drizzle from "../Assets/drizzle.png"
import humidity from "../Assets/humidity.png"
import rain from "../Assets/rain.png"
import snow from "../Assets/snow.png"
import wind from "../Assets/wind.png"
import search from "../Assets/search.png"
function WeatherApp() {

    let api_key = "22fe79daea68ceab12bb53aced185792"

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")

        if (element[0].value === "") {
            return 0
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=1799d3fc86e5898ee66b7da3aef7c863`
        let resopnse = await fetch(url)
        let data = await resopnse.json()
        const humidity = document.getElementsByClassName("humidity-percent")
    }
    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Search' />
                <div className="search-icon" onClick={search}>
                    <img src={search} height="40px" alt="" />
                </div>

            </div>
            <div className="weather-image">
                <img src={cloud} alt="" />
            </div>
            <div className="weather-temp">
                24°C
            </div>
            <div className="weather-location">Pune</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity} alt="" height="30px" className='icon' />
                    <div className="data">
                        <div className="humidity-percentage">64%</div>
                        <div className="text">Humidity</div>
                    </div>

                </div>
                <div className="element">
                    <img src={wind} alt="" height="30px" className='icon' />
                    <div className="data">
                        <div className="humidity-percentage">18km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WeatherApp