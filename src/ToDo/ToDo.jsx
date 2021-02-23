import React, {useState} from 'react'
import ToDoItem from "./ToDoItem";
import  './ToDo.css'

const ToDo= () => {
    const [name, setName] = useState('')
    const [todos, setTodos] = useState([
        {_id: 0,
        name: 'Добавить задачу',
        isChecked: false}
        ]
    )

       const onKeyPressNameHandler =e =>{
           if(e.key === 'Enter') {
               addTask();
           }
       }

       const addTask = ()=>{
        if (name !== ''){
           setTodos(prev => [...prev, {_id: todos.length, name: name, isChecked: false}])
           setName('')}
       }

       const toggleCheckedToDo = idx => {
            const newArray = [].concat(todos)
           newArray[idx].isChecked =!newArray[idx].isChecked
           setTodos(newArray)
       }


    return (
        <div className="ListWrapper">
            <div className="List">
            <h1>Список задач</h1>
            {todos && todos.map((todo,idx) => {
                const deleteTask = (event)=>{
                    event.stopPropagation()
                    const todosTemp = [...todos]
                    todosTemp.splice(idx,1)
                    setTodos(todosTemp)
                }
                return (
                    <ToDoItem key={todo._id} name={todo.name} isChecked={todo.isChecked} toggleCheckedToDo={toggleCheckedToDo}
                              idx={idx}
                              onRemove = {deleteTask}
                    />
                )
            })}
            <div className='flex'>
            <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Добавить...'
            onKeyPress={onKeyPressNameHandler}
            className="InputToDo"
            />
            <button className='skipp-item' onClick={addTask}>Добавить</button>
            </div>
            </div>
            </div>
    )
}
export default ToDo