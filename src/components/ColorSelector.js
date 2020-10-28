import React from 'react'

// class ColorSelector extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             hex: props.hex
//         }
//     }

//     handleChange = (event) => {
//         console.log(event.target.value)
//         this.setState({hex: event.target.value})
//     } 

//     render(){
//         const {hex} = this.state
//         return(
//             <input type="color" value={hex} onChange={this.handleChange} />
//         )
//     }
// }

const ColorSelector = (props) => {
    const {changeHandlerCb, hex} = props

    function changeHandler(event){
        changeHandlerCb(event.target.value)
    }

    return(
        <input
            type="color"
            value={hex}
            onChange={changeHandler} />
    )
}

export default ColorSelector