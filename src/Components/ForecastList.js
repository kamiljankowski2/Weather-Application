import React, { useContext } from 'react';
import { List } from '../style/Prognosis';
import ForecastItem from './ForecastItem';
import { WeatherContext } from '../Data'

const ForecastList = () => {
    const { forecastCon } = useContext(WeatherContext)
    const [forecast] = forecastCon
    return (
        <>

            <List>

                {forecast.length > 0 ?
                    forecast.map(item => <ForecastItem key={item.dt} time={item.dt_txt.slice(10).slice(0, 6)} icon={item.weather[0].icon} temp={Math.floor(item.main.temp)} feelslike={Math.floor(item.main.feels_like)}
                    />) : <> <ForecastItem time="0:00" icon={"01d"} /><ForecastItem time="0:00" icon={"01d"} /><ForecastItem time="0:00" icon={"01d"} /><ForecastItem time="0:00" icon={"01d"} /><ForecastItem time="0:00" icon={"01d"} /> </>}

            </List>
        </>
    );
}

export default ForecastList
