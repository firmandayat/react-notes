import React from "react";
import NoteItemBody from './NoteItemBody'
import {showFormattedDate} from "../utils/index"

function NoteItem({title, createdAt, body}) {
    return(
        <div className="note-item">
            <NoteItemBody title={title} createdAt={showFormattedDate(createdAt)} body={body}/>
        </div>
    )
}

export default NoteItem