import TaskOptionStyles from "../styles/TaskOptions.module.css"
import CounterTaskOptions from "./CounterTaskOptions";
const TaskOptions = ({actividad, opcion, setList}) => {
  const addList = () => {
    setList([...opcion, actividad]);
  }
  return (
    <>
    <div className={TaskOptionStyles.mainContainer}>
        <div className={TaskOptionStyles.btnStyle} onClick={addList}>
          <h3>{actividad.actividad}</h3>
        </div>
        <CounterTaskOptions actividad={actividad} opcion={opcion} setList={setList}/>
    </div>
    </>
  )
}

export default TaskOptions