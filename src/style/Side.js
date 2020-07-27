import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Side = styled.section`
grid-column: 1 /2;
grid-row: 1/5;
padding: 20px;
display: flex;
flex-direction: column;
align-items:center;
background-color: #4a4f4d;
border-radius: 50px 0 0 50px;
@media (max-width: 1050px) {
align-items: center;    
border-radius: 50px;
}


`


export const TempIcon = styled.i`
 font-size: 200px;
 margin: 35px 0 0;
 color: #fff;
 `






export const CurrentTemp = styled.h2`
    font-weight: normal;
    font-size: 75px;
    margin: 35px 0 0;
    color: ${props => props.color};
`

export const CurrentTime = styled.p`
    font-size: 25px;
    font-weight: 300;
    margin: 35px 0;
    color: #fff;
    span {
    color: #cbd1d1;
}
`

export const ThumbnailContainer = styled.div`
    overflow: hidden;
    width: 300px;
    height: 150px;
    border-radius: 25px;
    position: relative;
    margin: 35px 0 0;
`

export const Thumbnail = styled.img`
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    max-height: 100%;
    filter: grayscale(45%);

`

export const ThumbnailDescription = styled.h3`
position: absolute; 
    margin: 0;
    font-size: 22px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-shadow: 4px 2px 0px rgba(0, 0, 0, 1);
`


export const Description = styled.p`
font-size: 18px !important;
color: #fff;
margin: 0 0 5px;
padding: 0;
text-transform: capitalize;
`
export const DescriptionIcon = styled(FontAwesomeIcon)`
margin: 0 5px 0 0;
color: ${props => props.color};
font-size: 25px;
`
