import React from 'react';
import { PrognosisItem, PrognosisHeading, PrognosisIcon, Temperature } from '../style/Prognosis'

const ForecastItem = (props) => {
    const { time, icon, temp, feelslike } = props
    return (
        <PrognosisItem >
            <PrognosisHeading >{time}</PrognosisHeading >
            <PrognosisIcon className={`owi owi-${icon}`} />
            <p>
                <Temperature weight="bold" >{temp}&#176; </Temperature>
                / <Temperature color="#878787" margin="30px">{feelslike}&#176; </Temperature>
            </p>


        </PrognosisItem >
    );
}

export default ForecastItem;