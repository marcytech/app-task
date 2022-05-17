import { useState, useEffect } from "react"

export const useTask = (data = null) => {
  const [task, setTask] = useState(data)

  return[task, setTask]
}