import React from "react";
import NoteList from "./NoteList";
import {getInitialData} from "../utils/index"

class NoteApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notes: getInitialData()
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({notes})
    }

    render(){
        return(
              <div className="note-app">
              <h1 className="note-app__header">Daftar Notes</h1>
              <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
              </div>
        )
    }

}

export default NoteApp