import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    const Comments = [
        {
            name : "김만두",
            comment : "안녕하세요~ 만두입니다.",
        },
        {
            name : "유재석",
            comment : "안녕하세요 유재석입니다.",
        },
        {
            name : "박태경",
            comment : "안녕안녕^^ㅎㅎㅎㅎㅎㅎ",
        },
    ];
    return(
        <>
        {Comments.map((comment) => {
            return(
                <Comment name = {comment.name} comment = {comment.comment}/>
            );
        })}
        </>
    );
}
export default CommentList;