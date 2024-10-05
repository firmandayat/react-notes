import React from "react";

class NoteInput extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title : '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onContentChangeEventHandler = this.onContentChangeEventHandler.bind(this)
        this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this)

    }

    onTitleChangeEventHandler(event){
        this.setState(() => {
            return{
                title: event.target.value
            }
        })
    }

    onContentChangeEventHandler(event){
        this.setState(() => {
            return{
                body: event.target.value
            }
        })
    }

    onSubmitChangeEventHandler(){
        event.preventDefault()
        this.props.addNote(this.state)
    }

    render(){
        return(
            <form className="note-input" onSubmit={this.onSubmitChangeEventHandler}>
                <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                <input type="text" placeholder="Content" value={this.state.body} onChange={this.onContentChangeEventHandler}/>
                <button type="submit" className="note-input">Add New Note</button>
            </form>
        )
    }
}

export default NoteInput