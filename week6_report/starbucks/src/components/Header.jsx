import { NavLink, Link } from "react-router-dom";
import styled from 'styled-components';


const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #F6F5EF;
`;

const Nav = styled(NavLink)`    
    text-decoration: none;
    color: black;
    font-size: 16px;
    font-weight: 600;
    padding: 0 20px;
    &.active {
        color: #007042;
    }
`;

export default function Header() {
    return (
        <>
        <FlexContainer>
            <Link to="/">
                <img src="src/assets/logo.png" alt="logo" width="50" />
            </Link>
            <Nav to="/">HOME</Nav>
            <Nav to="/intro">MENU</Nav>
        </FlexContainer>
        </>
    );
}
