import React from 'react';
import { StyledItem, DetailContent } from '../style/StyledDetails'

const Details = (props) => {
    return (
        <StyledItem>
            <h3>{props.title}</h3>
            <DetailContent>{props.content}{props.symbol}</DetailContent>

        </StyledItem>
    );
}

export default Details;