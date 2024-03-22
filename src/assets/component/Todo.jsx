import { useState } from "react"

function Todo () {
    const [todo, setTodo] = useState([])
    const [inputTask, setInputTask] = useState("")

    const changeInput = (event)=> {
        setInputTask(event.target.value)
    }

    const renderTask = ()=> {
        if (inputTask != "") {
            setTodo([...todo, inputTask])
            setInputTask("")
        }
    }

    const deleteTodo = (index)=> {
        const arrayTodo = [...todo]
        arrayTodo.splice(index, 1)
        setTodo(arrayTodo)
    }

    const editTodo = (index)=> {
        let newTodo = window.prompt("Edit Your Task:", todo[index])

        if (newTodo != ""){
            const arrayTodo = [...todo]
            arrayTodo[index] = newTodo
            setTodo(arrayTodo)
        }
    }

    return(
        <>
            <input type="text" value={inputTask} onChange={changeInput} placeholder='Enter your task...' />
            <button onClick={renderTask}>ADD TASK</button>

            <ul>
                {todo.map((task, index) => (
                    <li>{task}<button onClick={()=> editTodo(index)}>EDIT TASK</button><button onClick={()=> deleteTodo(index)}>DELELTE TASK</button></li>

                ))}
            </ul>
        
        </>
    )

}


export default Todo

