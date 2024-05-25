import { DUMMY } from "../data";
import { useParams } from "react-router-dom";

export default function IntroDetailPage() {
    const { id } = useParams();

    return(
        <>
        {
            DUMMY.map((item) => {
                if(item.id === parseInt(id)) {
                    return (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.major}</p>
                        </div>
                    );
                }
            })
        }
        </>
    )
}