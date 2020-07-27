import React, { createContext, useState } from 'react';


export const WeatherContext = createContext()


export const WeatherProvider = (props) => {
    const [weather, setWeather] = useState({
        city: "-/-",
        country: "-/-",
        temp: "-/-",
        feels_like: "-/-",
        temp_min: "-/-",
        temp_max: "-/-",
        main: "-/-",
        description: "-/-",
        icon: "10d",
        sunrise: 0,
        sunset: 0,
        wind: "-/-"
    })

    const [forecast, setForecast] = useState([])

    return (
        <WeatherContext.Provider
            value={
                {
                    weatherCon: [weather, setWeather],
                    forecastCon: [forecast, setForecast],
                }}>
            {props.children}
        </WeatherContext.Provider>
    );
}
export default WeatherProvider;
