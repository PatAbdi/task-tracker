import { useState } from "react"

const AddTasks = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [remind, setRemind] = useState(false)
    const onSubmit = (e) =>
    {
        e.preventDefault()

        if(!text)
        {
            alert('please add a task')
            return
        }

        onAdd({text, day, remind})

        setText('')
        setDay('')
        setRemind(false)


    }

    return (
        <form className="add-form" onSubmit={onSubmit} >
            <div className="form-control">
                <label>Tasks</label>
                <input type='text' placeholder="Add Task" 
                value={text} 
                onChange={(e) => 
                setText(e.target.value)}/>

            </div>

            <div className="form-control">
                <label>Day & Time</label>
                <input type='text' placeholder="Add Day & Time"
                value={day} 
                onChange={(e) => 
                setDay(e.target.value)}
                
                />

            </div>

            <div className="form-control form_checkbox">
                <label>Set Reminder</label>
                <input type='checkbox'
                checked={remind}
                value={remind} 
                onChange={(e) => 
                setRemind(e.currentTarget.checked)}
                
                />

            </div>
                
            <input type='submit' value= "Save Task" className='save_btn' />
            
        </form>
    )
}

export default AddTasks
