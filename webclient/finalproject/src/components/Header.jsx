import { NavLink, Link } from "react-router-dom";
import styled from 'styled-components';

const HeaderContainer = styled.div`
    width: 70%;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavContainer = styled.div`
    display: inline-block;
    margin: 0 10px;
`;

const Nav = styled(NavLink)`    
    border: none;
    border-radius: 50px;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: 400;
    background-color: transparent;
    color: #FFFFFF;
    &.active {
        color: #FEEE96;
    }
    &:hover {
        color: #FEEE96;
    }
`;

export default function Header() {
    return (
        <>
            <HeaderContainer>
                <Link to="/">
                    <img src="src/assets/logo.png" alt="logo" width="100" />
                </Link>
                <NavContainer>
                    <Nav to="/">home</Nav>
                    <Nav to="/Memo">memo</Nav>
                    <Nav to="/Game">game</Nav>
                </NavContainer>
            </HeaderContainer>
        </>
    );
}
