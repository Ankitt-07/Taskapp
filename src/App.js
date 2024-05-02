import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { useState} from 'react'

function App() {

  const [showAddTask, setShowAddTask] = useState (false)   

  const [tasks, setTasks] = useState([
   
    {
        id: 1,
        text: 'College',
        day: 'June 1st at 2:30pm',
        remidner: false,
    },
    {
        id: 2,
        text: 'Workout',
        day: 'June 1st at 7pm',
        remidner: true,
    },
    {
        id: 3,
        text: 'Coding',
        day: 'June 1st at 9:30pm',
        remidner: false,
    },
    {
        id: 4,
        text: 'Exam',
        day: 'June 8th at 9am',
        remidner: false,
    }
])
//add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000 )+ 1;
  const newTask = {id,...task}
  setTasks([...tasks,newTask])
}

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id!== id))
}

//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? 
  { ...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
     <Header showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />

     {showAddTask && <AddTask onAdd={addTask} />}


     {tasks.length >0 ?<Tasks tasks={tasks} onToggle={toggleReminder} 
     onDelete={deleteTask} /> 
     :
      'No Tasks To Show.'}
  
    </div>
  

  );
}






export default App; 
