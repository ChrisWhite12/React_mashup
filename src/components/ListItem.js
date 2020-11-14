import React, {Component} from 'react'

const ListItem = () => {
    return (
        <div>
            <h1>ListItem</h1>
            {/* <li className="list_item" key={`item_${index}`} data-itemkey={`item_${index}`}>
                <span id={`item_${index}_text`}>{item}</span>
                <input value={index} type="checkbox" onChange={(event)=> handleCheck(event)}></input>
                <button value={index} onClick={(event)=> handleRemove(event)}>Remove</button>
            </li> */}
        </div>
    )
}

export default ListItem