import React, {useState} from 'react'

const ToDoList = () => {
    
    const [listItems, setListItems] = useState([])
    const [listIndex, setListIndex] = useState(0)

    const newListItem = (new_text) => {
        return {
            _id: listIndex,
            text: new_text,
            crossed: false
        }
    }

    const handleClick = (event) => {
        const new_text = document.getElementById("newItemText").value
        setListItems([...listItems,newListItem(new_text)])
        setListIndex(listIndex + 1)
        document.getElementById("newItemText").value = ""
        // console.log(listItems)
    }

    const handleRemove = (event) => {
        const itemRemove = event.target.value
        console.log(`itemRemove - ${itemRemove}`)
        const filter_list = listItems.filter((item) => item._id !== parseInt(itemRemove))
        setListItems(filter_list)
        console.log(filter_list)
    }

    const handleCheck = (event) => {
        const itemCross = event.target.value
        console.log(`itemCross - ${itemCross}`)
        const find_list = listItems.find((item) => item._id === parseInt(itemCross))
        
        console.log(find_list)
        if (find_list["crossed"]) {
            find_list["crossed"] = false
            document.getElementById(`item_${itemCross}_text`).style.textDecoration = "none"
        } else {
            find_list["crossed"] = true
            document.getElementById(`item_${itemCross}_text`).style.textDecoration = "line-through"
        }
        
        setListItems(listItems.map((item) => item._id === find_list._id ? find_list : item))
    }

    return (
        <div className="App_main">
            <h1>ToDoList</h1>
            <ul>
                {listItems.map((item) => {
                    return(<li key={`item_${item._id}`} className="list_item">
                            <span id={`item_${item._id}_text`}>{item.text} -- {item._id}</span>
                            <input value={item._id} type="checkbox" onChange={(event)=> handleCheck(event)}></input>
                            <button value={item._id} onClick={(event)=> handleRemove(event)}>Remove</button>
                        </li>)
                })}
                
                <li><input id="newItemText" type="text"></input><button onClick={(event)=> handleClick(event)}>New Item</button></li>
            </ul>
        </div>
    )
}

export default ToDoList
