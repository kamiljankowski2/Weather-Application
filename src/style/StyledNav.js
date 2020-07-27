import styled from "styled-components";

export const Nav = styled.nav`
grid-column: 2/3;
grid-row: 1/2;
/* background-color: red; */
display: flex;
align-items: center;
justify-content: flex-end;
padding: 40px;
@media(max-width: 1050px) {
    display: none;
}

`