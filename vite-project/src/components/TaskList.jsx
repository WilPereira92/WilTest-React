import TaskListStyles from "../styles/TaskList.module.css"

const TaskList = ({opcion}) => {
  return (
    <>
      <div className={TaskListStyles.container}>
          {opcion.map((item, index) => {
            return <p key={index}>{item.actividad}</p>
          })}
      </div>  
    </>
  )
}

export default TaskList