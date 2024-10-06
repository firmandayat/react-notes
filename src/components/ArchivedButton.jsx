import React from "react";

function ArchivedButton({id, onArchived, isArchived}) {
    return (
        <button className="note-item__archive-button" onClick={()=>onArchived(id)}> {isArchived ? 'Unarchive' : 'Archive'}</button>
    )
}

export default ArchivedButton;