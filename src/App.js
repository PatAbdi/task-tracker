import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";

const App = () => {
  const [showAddTask, setshowAddTask] = useState
  (false)

  const [lists, setlists] = useState([
    {
        id: 1,
        text: 'Doctors Day',
        day: 'Feb 12th 2021 05:00AM',
        reminder: true,
    },
    
    {
        id: 2,
        text: 'Yae Miko Day',
        day: 'Mar 5th 2021 17:00PM',
        reminder: true,
    },
    
    {
        id: 3,
        text: 'Movie Day',
        day: 'Apr 1st 2021 09:00AM',
        reminder: false,
    }
])


//add Task
const addTasking = (taskz) =>
{
const id = Math.floor(Math.random() * 10000) + 1
const newTasks = {id, ...taskz}
setlists([...lists, newTasks])
}



// Toggle Reminder

const toggleReminder =(id) =>
{
setlists(lists.map((reminders)=>reminders.id === id ? {...reminders, reminder: !reminders.reminder } : reminders ))
}




// Delete Tasks

const deletetask = (id) =>
{
setlists(lists.filter((lists)=> lists.id !== id))
}
  return (
    <div className="App">
      <Header onAdd= {() =>setshowAddTask(!showAddTask) 
        }
        showAdd ={showAddTask}/>
      {showAddTask && <AddTasks onAdd={addTasking} />}
      {lists.length> 0 ?<Tasks listsname={lists} onDelete={deletetask} onToggle={toggleReminder}/> : 'No tasks Available'}
    </div>
  )
}

export default App;
