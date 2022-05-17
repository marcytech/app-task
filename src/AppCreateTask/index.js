import { observerCreateTask } from '../utils/task'
export const AppCreateTask = () => {
   
  const setTitle = (event) => {
    const title = event.target.value 
    const enter = 13
    if (event.keyCode === enter) {
      observerCreateTask.set({title})
      event.target.value = ''
    }
  }
  return(

    <label>
      <span>Nova Tarefa </span>
      <input type="text" onKeyUp={setTitle}/>
    </label>
  )
}