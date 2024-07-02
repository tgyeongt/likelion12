import { useEffect, useState } from 'react'
export default function Post() {
    const [res, setRes] = useState('초기화');
    const [id, setID] = useState('');
    const [title, setTitle] = useState('초기화');
    const [body, setBody] = useState('초기화');
    const post = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setRes(json)
            });
    };
    const handleId = (event) => {
        setID(event.target.value);
    };
    const handleTitle = (event) => {
        setTitle(event.target.value);
    };
    const handleBody = (event) => {
        setBody(event.target.value);
    };

    return (
        <div>
            <h1>Post</h1>
            <input placeholder='id' onChange={handleId}></input><p></p>
            <input placeholder='title' onChange={handleTitle}></input><p></p>
            <input placeholder='body' onChange={handleBody}></input><p></p>
            <button onClick={post}>POST</button>
        </div>
    );
}