import React from 'react';
import { Prognosis, ForecastHeading } from '../style/Prognosis'
import ForecastList from './ForecastList'

const Forecast = () => {
    return (<Prognosis>
        <ForecastHeading>Forecast for the next hours</ForecastHeading>
        <ForecastList />
    </Prognosis>);
}

export default Forecast;