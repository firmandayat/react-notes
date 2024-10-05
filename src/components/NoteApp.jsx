import React from "react";
import NoteList from "./NoteList";
import {getInitialData} from "../utils/index"
import NoteInput from "./NoteInput"

class NoteApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notes: getInitialData()
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.onArchivedHandler = this.onArchiveEventHandler.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({notes})
    }

    onAddNoteHandler({title, body}){
        this.setState((prevState) => {
            return{
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt:new Date().toISOString(),
                        archived:false
                    }
                ]
            }
        })
    }

     onArchiveEventHandler(id) {
        const notes = this.state.notes.map((note) => {
        if (note.id === id) {
            return { ...note, archived: !note.archived }
        }
        return note;
        });
        this.setState({ notes });
    }

    render(){
        const activeNotes = this.state.notes.filter((note) => !note.archived);
        const archivedNotes = this.state.notes.filter((note) => note.archived);

        return(
              <div className="note-app">
              <h1 className="note-app__header">My Notes</h1>
              <h3 className="note-app__title">Add Note</h3>
              <NoteInput addNote={this.onAddNoteHandler}/>

              <h3 className="note-app__title">Active Notes</h3>
              <NoteList notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
              <br /><br />
              <h3 className="note-app__title">Archived Notes</h3>
              <NoteList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />

              {/* <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler}/> */}
              </div>
        )
    }

}

export default NoteApp