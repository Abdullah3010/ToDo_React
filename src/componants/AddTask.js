import { useState } from "react"


const AddTask = ({onAddTask}) => {

    const [name ,setName] =  useState('')
    const [date ,setDate] =  useState('')
    const [isDone ,setIsDone] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert('Please enter task name!!')
            return
        }

        onAddTask({name,date,isDone})

        setName('')
        setDate('')
        setIsDone(false)

    }
    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task Name</label>
                <input 
                    type='text' 
                    placeholder='Task Name' 
                    value={name} 
                    onChange = {(e)=>setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Task Date</label>
                <input 
                    type='text' 
                    placeholder='Task Date' 
                    value={date} 
                    onChange = {(e)=>setDate(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Task Name</label>
                <input 
                    type = 'checkbox' 
                    placeholder = 'Is Done' 
                    value = {isDone} 
                    checked = {isDone}
                    onChange = {(e)=>setIsDone(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask