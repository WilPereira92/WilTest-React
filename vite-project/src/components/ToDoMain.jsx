import TaskOptions from "./TaskOptions"
import ToDoMainStyles from "../styles/ToDoMainStyles.module.css"
import TaskList from "./TaskList"
import { useState } from "react"
const ToDoMain = () => {
  const [opcion, setList] = useState([]);
  const opciones = [
    {
      actividad: 'Mercado'
    },
    {
      actividad: 'Pasear al perro'
    },
    {
      actividad: 'Estudiar programación'
    },
    {
      actividad: 'Cocinar'
    }
  ]
  return (
    <>
      <div className={ToDoMainStyles.container}>
        {
          opciones.map(
            (item, index) => {
              return <TaskOptions key={index} actividad={item} opcion={opcion} setList={setList}/>
            }
            )
          }
      </div>
    <div className={ToDoMainStyles.taskListStyles}>
        <TaskList opcion={opcion}/>
    </div>
      </>
  )
}

export default ToDoMain