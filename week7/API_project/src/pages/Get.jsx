import { useLoaderData } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border: 5px;
`;

export const loader = async() => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json();
    console.log(json);
    return json;
  }
  catch (error) {
    console.error('Error: ', error);
    return [];
  }
};

export default function Get() {
    var data = useLoaderData()
    
    // const [data, setData] = useState('초기화');
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts/1')
    //     .then((response) => {
    //     return response.json();
    //     })
    //     .then((json) => {
    //     console.log(json);
    //     setData(json);
    //     })
    //     .catch((error) => {
    //     console.log('Error: ', error);
    //     setData(error);
    //     })
    //     .finally(() => {
    //     console.log('Finally end');
    //     })

    // }, []);

  return (
    <>
      <h1>Get</h1>
      <div>
        <p>{JSON.stringify(data)}</p>
      </div>
      <h1>getpage입니당</h1>
    </>
  )
}