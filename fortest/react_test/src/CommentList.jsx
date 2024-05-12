import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    const Comments = [
        {
            name: "김만두",
            comment: "안녕하세요 만두입니다.",
        },
        {
            name: "유재석",
            comment: "리액트.. ㅜㅜㅜㅜㅜ",
        },
        {
            name: "박태경",
            comment: "반가워용 ^^",
        },
    ];
    return(
        <>
        {Comments.map((comment) => {
            return(
                <Comment 
                key = {comment.id} 
                name = {comment.name} 
                comment = {comment.comment}/>
            );
        })}
        </>
    )
}
export default CommentList;