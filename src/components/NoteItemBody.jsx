import React from "react";

function NoteItemBody({title, createdAt ,body}){
    return(
        <div className="note-item__body">
            <br />
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{createdAt}</p>
            <p className="note-item__body">{body}</p>
            <br />
                <div className="note-item__button">
                    <button className="note-item__archive-button">Archive</button>
                    <button className="note-item__delete-button">Delete</button>
                </div>
        </div>
    )
}

export default NoteItemBody