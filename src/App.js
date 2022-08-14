import { useState , useEffect } from "react";

import Header from "./componants/Header";
import Tasks from "./componants/Tasks";
import AddTask  from "./componants/AddTask";


function App() {

    const [showForm , setShowForm] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const fetchedTasks = await fetchTasks()
            setTasks(fetchedTasks)
        } 

        getTasks()
    },[])

    const fetchTasks = async () => {
        const response = await fetch("http://localhost:5000/tasks")
        const data = await response.json()
        return data
    }

    const fetchTask = async (id) => {
        const response = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await response.json()
        return data
    }

    const deleteTask = async (id) =>{

        await fetch(`http://localhost:5000/tasks/${id}`,
        {
            method : "DELETE"
        })

        setTasks(tasks.filter((task)=> task.id !== id))
    }

    const toggelIsDone = async (id) => {
        const toToggleTask = await fetchTask(id) 
        const updatedTask = {...toToggleTask,isDone :!toToggleTask.isDone}

        const response = await fetch(`http://localhost:5000/tasks/${id}`,{
            method : 'PUT',
            headers : {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(updatedTask) 
        })
        const data = await response.json()
        setTasks(tasks.map((task) => task.id === id ?{...task, isDone : data.isDone}:task))
    }

    const onAddTask = async (task) => {

        const response = await fetch("http://localhost:5000/tasks",
        {
            method : "POST",
            headers: {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(task)
        })

        const data = await response.json()

        setTasks([...tasks,data])


        // var id
        // if(tasks.length === 0) {
        //      id = 0
        // } else {
        //      id = tasks[tasks.length-1].id + 1
        // }
        // task = {id,...task}
        // setTasks([...tasks,task])
    }

    const toggelForm = () =>  setShowForm(!showForm)
    return (
        <div className="container">
            <Header onFormToggel={toggelForm}/>
            {showForm && <AddTask onAddTask = {onAddTask}/>}
            <Tasks tasks = {tasks} onDelete={deleteTask} onDoubleClick = {toggelIsDone}/>
        </div>
    );
}

export default App;
