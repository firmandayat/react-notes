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

    render(){
        return(
              <div className="note-app">
              <h1 className="note-app__header">My Notes</h1>
              <h3 className="note-app__title">Add Note</h3>
              <NoteInput addNote={this.onAddNoteHandler}/>
              <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
              </div>
        )
    }

}

export default NoteApp