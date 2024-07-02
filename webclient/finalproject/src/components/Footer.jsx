import {  NavLink} from "react-router-dom";
import styled from 'styled-components';

const Copyright = styled(NavLink)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    margin-left: 30px;
    color: grey;
    font-size: 12px;
`;

export default function Footer() {

    return(
        <>
            <Copyright>ⓒ 2024 Starbucks Coffee Company. All Rights Reserved.</Copyright>
        </>
    )
}