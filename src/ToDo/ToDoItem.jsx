import React from 'react'
import './ToDo.css'
const ToDoItem = (props) => {

    return (
        <div onClick={() => props.toggleCheckedToDo(props.idx)} className='todo-item'>
            <span style={{fontSize:'20px', marginLeft: '5px'}}>{props.isChecked ? "✓" : "▢"}</span>
            <span className= {props.isChecked ?'name todo-item__done' : 'name'}>{props.name}</span>
            <span><button onClick={props.onRemove}>X</button> </span>
        </div>
    )
}

export default ToDoItem