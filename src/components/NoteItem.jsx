import React from "react";
import NoteItemBody from './NoteItemBody'
import {showFormattedDate} from "../utils/index"

function NoteItem({title, createdAt, body, id, onDelete, onArchived, archived}) {
    return(
        <div className="note-item">
            <NoteItemBody title={title} createdAt={showFormattedDate(createdAt)} body={body} id={id} onDelete={onDelete} onArchived={onArchived} archived={archived}/>
        </div>
    )
}

export default NoteItem