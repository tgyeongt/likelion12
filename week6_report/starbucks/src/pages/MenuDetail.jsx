import { DUMMY } from "../data";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

const MenuDetailDiv = styled.div`
    padding: 0 40px;
`;

export default function MenuDetailPage() {
    const { id } = useParams();

    return(
        <>
        <MenuDetailDiv>
        {
            DUMMY.map((item) => {
                if(item.id === parseInt(id)) {
                    return (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <hr style={{color: '#007042', border: '1px solid #007042'}}></hr>
                            <p>{item.memo}</p>
                        </div>
                    );
                }
            })
        }
        </MenuDetailDiv>
        </>
    )
}