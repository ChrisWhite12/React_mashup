import React, {Component} from 'react'

class DynaForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            input_fields: [<li key="1">
                                <input type="text" defaultValue="test"></input>
                                <button value={1} onClick={(event) => this.handleRemove(event)}>Remove</button>
                            </li>],
            list_key: 2
        }
    }

    handleClick(){
        this.setState({
            input_fields: [ 
                ...this.state.input_fields, 
                <li key={this.state.list_key}>
                    <input type="text" defaultValue="test"></input>
                    <button value={this.state.list_key} onClick={(event) => this.handleRemove(event)}>Remove</button>
                </li>],

            list_key: this.state.list_key + 1
        })
        // console.log(this.state.input_fields)
    }

    handleRemove(event){
        console.log(event.target.value)
        this.setState({
            input_fields: this.state.input_fields.filter(el => el.key !== event.target.value)
        })
    }

    render(){
        const {input_fields,list_key} = this.state
        return (
            <div>
                <p>{list_key}</p>
                <ul>
                    {input_fields}
                </ul>
                <button onClick={() => this.handleClick()}>Add field</button>
            </div>
        )
    }
}

export default DynaForm