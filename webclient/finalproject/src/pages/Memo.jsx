import { Link } from "react-router-dom"
import styled from 'styled-components';


const MenuLi = styled.li`
    padding: 20px 0;
    list-style: none; 
`;

const Menu = styled(Link)`
    color: black;
    font-size: 16px;
    text-decoration: none;
    list-style: none; 
    padding-bottom: 4px;
    &:hover {
        border: none;
        border-bottom: 2px solid #007042;
        outline: none;
        padding-bottom: 4px;
    }
`;

export default function MemoPage() {
    return (
        <>
            
        </>
    );
}