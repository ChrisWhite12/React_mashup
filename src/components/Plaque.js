import React, {Component} from 'react'

const plaqueStyle = {
    border: "3px solid black",
    margin: "1em",
    padding: "1em",
    backgroundColor: "gold",
    display: "inline-block"
}

class Plaque extends Component{
    constructor(props){
        super(props)
        const {artist,painting} = props
        this.state = {artist, painting}
    }

    bindToState(event, stateVal){
        this.setState({[stateVal]: event.target.value})
    }

    render(){
        const {painting, artist} = this.state
        return(
            <div>
                <div style={plaqueStyle}>
                    <h2>{painting}</h2>
                    <h2>{artist}</h2>
                </div>
                <div>
                    <input 
                    type="text"
                    defaultValue="name goes here"
                    onChange={(event) => { this.bindToState(event, 'painting')}}
                    ></input>
                    <input 
                    type="text"
                    defaultValue="artist goes here"
                    onChange={(event) => { this.bindToState(event, 'artist')}}
                    ></input>
                </div>
            </div>
        )
    }
}

Plaque.defaultValue = {
    artist: "aaa",
    painting: "sdf"
}

export default Plaque