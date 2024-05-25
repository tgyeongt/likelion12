import {  NavLink} from "react-router-dom";
import styled from 'styled-components';

const Nav = styled(NavLink)`
    text-decoration: none;
    margin-left: 30px;
    color: black;
    &.active {
        color: red;
    }
`;

export default function Header() {
    return(
        <>
            <Nav to='/'>홈가기</Nav>
            <Nav to='/intro'>인트로</Nav>
        </>
    )
}