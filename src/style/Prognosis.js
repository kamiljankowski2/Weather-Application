import styled from "styled-components";

export const Prognosis = styled.section`
grid-column: 2/3;
grid-row: 2/3;
display: flex;
flex-direction: column;
justify-content: center;
padding: 0 40px;
@media (max-width: 1050px) {
grid-column: 1/2;
grid-row: 5/6;
align-items: center;
margin: 35px 0 0;
}


`
export const ForecastHeading = styled.h2`
color: #c9185c;`

export const List = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
border-radius: 25px;
/* padding: 10px 20px; */

`


export const PrognosisItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #d0d6d6;
border-radius: 25px;
width: 150px;

@media (max-width: 1250px) {
width: auto;
background-color: transparent;
}

`

export const PrognosisHeading = styled.h3`
font-weight: normal;
font-size: 20px;
@media (max-width: 480px) {
font-size: 16px;   
}
`

export const PrognosisIcon = styled.i`
font-size: 55px;
@media (max-width: 480px) {
font-size: 30px;    
}`

export const Temperature = styled.span`
font-size: 18px;
font-weight: ${props => props.weight};
color: ${props => props.color};



@media (max-width: 480px) {
font-size: 14px; 
margin-right: ${props => props.margin};   
}
@media (max-width: 355px) {
font-size: 12px;    
}
`