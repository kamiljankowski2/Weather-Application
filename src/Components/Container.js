import React from 'react';
import { StyledContainer } from '../style/StyledContainer'
import Navigation from './Navigation'
import '../Icons/open-weather-icons.scss';
import SidePanel from './SidePanel'
import Forecast from './Forecast'
import Details from './Details'

const Container = () => {
    return (

        <StyledContainer>
            <Navigation />

            <SidePanel />
            <Forecast />
            <Details />


        </StyledContainer>
    );
}

export default Container;