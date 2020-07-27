import styled from "styled-components";
import '../Fonts/fonts.css'

export const StyledContainer = styled.main`
max-width: 1280px;
height: auto;
margin: 30px auto 0;
border-radius: 50px;
background-color: #fff;
display: grid;
grid-template-columns: 375px 1fr;
grid-template-rows: 75px repeat(3, 1fr);
justify-content: center;
align-content: center;
font-family: "Roboto";

@media (max-width: 1050px) {
grid-template-columns: 1fr;
grid-template-rows: 75px repeat(3, 1fr);
}
` 