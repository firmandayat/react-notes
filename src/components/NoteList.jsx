import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onDelete, onArchived}){
    return(
        <div className="notes-list reveal1">
            { notes.length > 0 ? (
                notes.map((note) => (
                    <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchived={onArchived} {...note}/>
                ))) : (
                    <h3 className="notes-list__empty-message reveal">
                        Empty notes
                    </h3>
                )
            }
        </div>
    )
}

export default NoteList