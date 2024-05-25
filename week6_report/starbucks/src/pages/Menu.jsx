import { Link } from "react-router-dom"
import { DUMMY } from "../data"
import styled from 'styled-components';


const MenuLi = styled.li`
    padding: 10px 0;
    list-style: none; 
`;

const Menu = styled(Link)`
    color: black;
    font-size: 16px;
    text-decoration: none;
    list-style: none; 
    &:hover {
        border: none;
        border-bottom: 2px solid #007042;
        outline: none;
    }
`;

export default function MenuPage() {
    return (
        <>
            <ul>
                {DUMMY.map((item) => (
                    <MenuLi key={item.id}>
                        <Menu to={`${item.id}`}>{item.name}</Menu>
                    </MenuLi>
                ))}
            </ul>
        </>
    );
}
