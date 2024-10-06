import React from "react";
import DeleteButton from "./DeleteButton";
import ArchivedButton from "./ArchivedButton";

function NoteItemBody({title, createdAt, body, id, onDelete, onArchived}){
    return(
        <div className="note-item__body">
            <br />
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{createdAt}</p>
            <p className="note-item__body">{body}</p>
            <br />
                <div className="note-item__button">
                    <ArchivedButton id={id} onArchived={onArchived}/>
                    <DeleteButton id={id} onDelete={onDelete}/>
                </div>
        </div>
    )
}

export default NoteItemBody