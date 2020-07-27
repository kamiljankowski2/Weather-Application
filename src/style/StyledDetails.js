import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DetailsContainer = styled.section`
grid-column: 2/3;
grid-row: 3/5;
margin: 40px 0 0;
padding: 0 40px;
@media (max-width: 1050px) {
grid-column: 1/2;
grid-row: 6/7;
display: flex;
flex-direction: column;
align-items: center;
}


`

export const StyledList = styled.ul`
display: flex;
flex-wrap: wrap;
list-style-type: none;
border-radius: 25px;
padding: 10px 20px 25px;
background-color: #d0d6d6;

`



export const StyledItem = styled.li`
flex-basis: 33%;
display: flex;
flex-direction: column;
justify-content: center;
align-items:flex-start;
@media (max-width: 1050px) {
flex-basis: 33%;
align-items: center;
}`

export const DetailsHeading = styled.h2`
color: #c9185c;`

export const DetailContent = styled.p`
font-size: 25px;
`

export const DetailIcon = styled(FontAwesomeIcon)`
color: ${props => props.color};
font-size: 20px;
margin: 0 0 0 10px;
`