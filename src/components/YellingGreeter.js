import React, {Component} from 'react'

class YellingGreeter extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: props.message.toUpperCase()
        }
    }

    onClickSend(){
        let text_val = document.getElementById("textInput")["value"]
        console.log(text_val)
        this.setState({message: text_val.toUpperCase()})
    }

    render(){
        const {message} = this.state
        return (
            <div>
                <p>{message}</p>
                <input type="text" id="textInput"></input>
                <button onClick={this.onClickSend.bind(this)}>Send</button>
            </div>
        )
    }
}

export default YellingGreeter