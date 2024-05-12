import React from "react";
import CommentList from "./CommentList";
const styles = {
        wrapper : {
            margin: "8px",
            padding : 20,
            display : "flex",
            flexDirection : "row",
            border : "1px solid grey",
            borderRadisus : 16,
        },
        imageContainer : {},
        image : {
            width : 50,
            height : 50,
            borderRadisus : 25,
        },
        contentContainer : {
            marginLeft : 10,
            display : "flex",
            flexDirection : "column",
            justifiContent : "center",
        },
        nameText : {
            color : "black",
            fontSize : 16,
            fontWeight : "bold",
        },
        commentText : {
            color : "black",
            fontSize : 16,
        },
    }
    
    
function Comment(props) {
    return (
        <div style = {styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                style = {styles.image} />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>
                    {props.comment}
                </span>
            </div>
        </div>
    )
}
export default Comment;