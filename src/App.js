import { useState } from 'react'
import { sort } from './utils/sort'
import { observerRemoveTask, observerSelectedTask, observerCreateTask} from './utils/task'
import { AppTaskList } from './AppTaskList'
import { AppButton } from './AppButton'
import { AppCreateTask } from './AppCreateTask'



function App() {

  const [ tasks, setTasks] = useState([
    {id: 1, title:'Fazer bolo'},
    {id: 2, title:'Trepar gostoso'},
    {id: 3, title:'Comer bolo depois de trepar'}
  ])

  const [hasSelectedTask, setHasSelectedTask] = useState(false)

 observerCreateTask.on( task => {
    const id = tasks.length + 1
    setTasks([...tasks, { id, ...task }])
  })

  observerSelectedTask.on((task) => {
    setSelectedTask(task)
    setHasSelectedTask(true)
  })

  observerRemoveTask.on((taskToRemove) => {
    removeTask(taskToRemove)
    setHasSelectedTask(false)
  })

  const removeTask = (taskToRemove) => {
    const newTaskList = tasks.filter(task => task.id !== taskToRemove.id)
    setTasks(newTaskList)
  }

  const setSelectedTask = (selectedTask) => {
    const filteredTasks = tasks.filter(task => task.id !== selectedTask.id)
    const updatedTasks = filteredTasks.map(task => ({...task, selected:false}))
    setTasks([...updatedTasks, selectedTask])
  }

  return (
    <>
      <h1>Tarefas</h1>
      <AppCreateTask/>
      <AppTaskList tasks={sort(tasks)} setSelectedTask={setSelectedTask}/>
      { hasSelectedTask ? <AppButton/> : ''}
    </>
  )
}

export default App
