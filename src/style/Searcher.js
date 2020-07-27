import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Searcher = styled.input`
border: none;
padding: 5px 35px;
width: 200px;
height: 25px;
border-bottom: 1px solid #000;
background-color: transparent;
color: #fff;

@media (max-width: 380px) {
    width: 150px;
}
`

export const LocationIcon = styled(FontAwesomeIcon)`
position: relative;
top: 0;
left: 25px;
color: #40edae;
`

export const SearchIcon = styled(FontAwesomeIcon)`
font-size: 16px;
color: #fff;
`

export const Button = styled.button`
border: none;
background-color: transparent;
cursor: pointer; 
position: relative;
top: 0;
right: 30px;`