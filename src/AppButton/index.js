import { observerSelectedTask, observerRemoveTask } from '../utils/task'

export const AppButton = () => {

  const removeTask = () => {
    const task = observerSelectedTask.get()
    observerRemoveTask.set(task)
  }
  return(
    <button onClick={removeTask}>Remover</button>
  )
}