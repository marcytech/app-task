import './styles.css'
import { observerSelectedTask } from '../utils/task'

export const AppTask = (props) => {

  const selectTask = (task) => {
    observerSelectedTask.set({...task, selected: true})
  }
  
  return(
    <li
      className={props.task.selected ? 'selected' : ''}
      onClick={() => selectTask(props.task)}
    >
      {props.task.title}
    </li>
  )
}