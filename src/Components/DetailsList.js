import React, { useContext } from 'react';
import Detail from './Detail'
import { StyledList, DetailIcon } from '../style/StyledDetails';
import { WeatherContext } from '../Data';

import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const DetailsList = () => {
    const { weatherCon } = useContext(WeatherContext)
    const [weather] = weatherCon
    const { feels_like, temp_min, temp_max, sunrise, sunset, wind } = weather
    return (

        <StyledList>
            <Detail title="Feels like" content={feels_like} symbol={<>&#176;</>} />
            <Detail title="Temp min" content={temp_min} symbol={<>&#176;</>} />
            <Detail title="Temp max" content={temp_max} symbol={<>&#176;</>} />
            <Detail title="Sunrise" content={new Date(sunrise * 1000).toLocaleTimeString().slice(0, 5)} symbol={<DetailIcon icon={faArrowUp} color="green" />} />
            <Detail title="Sunset" content={new Date(sunset * 1000).toLocaleTimeString().slice(0, 5)} symbol={<DetailIcon icon={faArrowDown} color="green" />} />
            <Detail title="Wind" content={wind} symbol={"km/h"} />
        </StyledList>


        // </StyledList>

    )
}

export default DetailsList;

// 