import { AppTask } from '../AppTask'

 export const AppTaskList = (props ) => {

   return(
    <ul>
      {props.tasks.map((task)=> {
        return <AppTask task={task} key={task.id} {...props}/>
      })}
    </ul>
  )
}