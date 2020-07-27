import React, { useContext, useState } from 'react';
import { Searcher, LocationIcon, SearchIcon, Button } from '../style/Searcher'
import { faLocationArrow, faSearch } from '@fortawesome/free-solid-svg-icons'
import { WeatherContext } from '../Data'


const Input = () => {
    const { weatherCon, forecastCon } = useContext(WeatherContext)
    const [, setWeather] = weatherCon
    const [, setForecast] = forecastCon

    const [value, setValue] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (value.length > 0) {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=d156afba53790bfb086d435eddc11734`)
            if (response.ok) {
                const data = await response.json()
                const { name, main, weather, sys, wind, timezone } = data

                setWeather({
                    city: name,
                    country: sys.country,
                    temp: Math.floor(main.temp),
                    feels_like: Math.floor(main.feels_like),
                    temp_min: Math.floor(main.temp_min),
                    temp_max: Math.floor(main.temp_max),
                    main: weather[0].main,
                    description: weather[0].description,
                    icon: weather[0].icon,
                    sunrise: sys.sunrise,
                    sunset: sys.sunset,
                    wind: wind.speed,
                    timezone
                })

                fetchForecast()
                setValue("")
            } else alert("Something went wrong...")

        } else alert("This input can't be empty")

    }

    const fetchForecast = async (e) => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=d156afba53790bfb086d435eddc11734`)
        const data = await response.json()
        const { list } = data
        const forecast = list.slice(0, 5)
        setForecast(forecast)
    }



    return (
        <form onSubmit={handleSubmit}>
            <LocationIcon icon={faLocationArrow} />
            <Searcher type="text" placeholder={"Search for places ..."} value={value} onChange={(e) => setValue(e.target.value)} />
            <Button><SearchIcon icon={faSearch} /></Button>
        </form>
    );
}

export default Input