import TaskOptionStyles from "../styles/TaskOptions.module.css"

const TaskOptions = ({actividad, opcion, setList}) => {
  const addList = () => {
    setList([...opcion, actividad]);
  }
  return (
    <>
      <h3 className={TaskOptionStyles.btnStyle} onClick={addList}>{actividad.actividad}</h3>
    </>
  )
}

export default TaskOptions