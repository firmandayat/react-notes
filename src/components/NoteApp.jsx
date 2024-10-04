import React from "react";
import NoteList from "./NoteList";
import {getInitialData} from "../utils/index"

function NoteApp(){
    const notes = getInitialData()

    return(
        <div className="note-app">
            <h1 className="note-app__header">Daftar Notes</h1>
            <NoteList notes={notes}/>
        </div>
    )
}

export default NoteApp