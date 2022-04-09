import { useState, useEffect } from "react"
// import {BrowserRouter as router, Route} from 'react-router-dom'
import Header from "./components/Header";
import Foots from "./components/Foots";
// import About from "./components/About";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";


const App = () => {
  const [showAddTask, setshowAddTask] = useState
  (false)

  const [lists, setlists] = useState([])

  useEffect(()=> {
    const gettasks =async () => {

    
    const tasksfromserver = await fetchtasks()
    setlists(tasksfromserver)
    }
    
    gettasks()
  }, [])

  // Fetch tasks
  const fetchtasks = async () =>
    {
      const res = await fetch('http://localhost:5000/taskslists')
      const data = await res.json()

      return data

    }

     // Fetch tasks
  const fetchTask = async (id) =>
  {
    const res = await fetch(`http://localhost:5000/taskslists/${id}`)
    const data = await res.json()

    return data

  }


//add Task
const addTasking = async (taskz) =>
{
const res = await fetch('http://localhost:5000/taskslists',
{

method: 'POST',
headers: {
    'Content-type': 'application/json'
},
body: JSON.stringify(taskz)
})

const data = await res.json()

setlists([...lists, data])



// const id = Math.floor(Math.random() * 10000) + 1
// const newTasks = {id, ...taskz}
// setlists([...lists, newTasks])
}



// Toggle Reminder

const toggleReminder = async (id) =>
{
  const tasktotoggle = await fetchTask(id)

  const updtasks = {...tasktotoggle, reminder: !tasktotoggle.reminder}

  const res = await fetch(`http://localhost:5000/taskslists/${id}`,
  {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updtasks)
  })

  const data = await res.json()




setlists(lists.map((reminders)=>reminders.id === id ? 
{...reminders, reminder: data.reminder } : reminders ))
}




// Delete Tasks

const deletetask = async (id) =>
{
await fetch(`http://localhost:5000/taskslists/${id}`, 
{
  method: 'DELETE',
})


setlists(lists.filter((lists)=> lists.id !== id))
}
  return (
    // <Router>

    
    <div className="App">
      <Header onAdd= {() =>setshowAddTask(!showAddTask) 
        }
        showAdd ={showAddTask}/>
        
      {showAddTask && <AddTasks 

      onAdd={addTasking} />}
      {lists.length> 0 ?

      <Tasks listsname={lists} 

      onDelete={deletetask} 

      onToggle={toggleReminder}
      /> 

      : 'No tasks Available'}
    
    {/* <Route path='/' exact render={(props) =>
    (
      <>
      
      </>
    )}/> */}
    {/* <Route path='/about' component={About} /> */}
    <Foots/>
    </div>

  )
  
}

export default App;
