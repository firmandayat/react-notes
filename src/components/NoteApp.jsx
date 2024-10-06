import React from "react";
import NoteList from "./NoteList";
import {getInitialData} from "../utils/index"
import NoteInput from "./NoteInput"

class NoteApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notes: getInitialData(),
            searchNote: ''
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
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

     onArchiveHandler(id) {
        const notes = this.state.notes.map((note) => {
        if (note.id === id) {
            return { ...note, archived: !note.archived }
        }
        return note;
        });
        this.setState({ notes });
    }

    onSearchHandler(event){
         this.setState({ searchNote: event.target.value });
    }

    render(){
        const activeNotes = this.state.notes.filter((note) => !note.archived);
        const archivedNotes = this.state.notes.filter((note) => note.archived);

        const filteredActiveNotes = activeNotes.filter(note =>
            note.title.toLowerCase().includes(this.state.searchNote.toLowerCase())
        );

        const filteredArchivedNotes = archivedNotes.filter(note =>
            note.title.toLowerCase().includes(this.state.searchNote.toLowerCase())
        );

        return(
              <div className="note-app">
              <h1 className="note-app__header">My Notes</h1>
              <h3 className="note-app__title">Add Note</h3>
              <NoteInput addNote={this.onAddNoteHandler}/>

              <input className="note-app__search" type="text" placeholder="Search notes..." value={this.state.searchNote} onChange={this.onSearchHandler}/>

              <h3 className="note-app__title-item">Active Notes</h3>
              <NoteList notes={filteredActiveNotes} onDelete={this.onDeleteHandler} onArchived={this.onArchiveHandler} />
              <br /><br />
              <h3 className="note-app__title-item">Archived Notes</h3>
              <NoteList notes={filteredArchivedNotes} onDelete={this.onDeleteHandler} onArchived={this.onArchiveHandler} />

              {/* <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler}/> */}
              </div>
        )
    }

}

export default NoteApp