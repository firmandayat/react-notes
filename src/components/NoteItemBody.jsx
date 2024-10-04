import React from "react";

function NoteItemBody({title, createdAt ,body}){
    return(
        <div className="note-item__body">
            <br />
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{createdAt}</p>
            <p className="note-item__body">{body}</p>
            <br />
            <button className="note-item__button">Archive</button>
            <button className="note-item__button">Delete</button>
        </div>
    )
}

export default NoteItemBody