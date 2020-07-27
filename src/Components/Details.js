import React from 'react';
import { DetailsContainer, DetailsHeading } from '../style/StyledDetails'
import DetailsList from './DetailsList'
const Details = () => {
    return (
        <DetailsContainer>
            <DetailsHeading>Today's Highlights</DetailsHeading>
            <DetailsList />


        </DetailsContainer>
    );
}

export default Details;