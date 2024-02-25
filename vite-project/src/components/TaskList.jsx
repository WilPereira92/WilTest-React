import TaskListStyles from "../styles/TaskList.module.css"

const TaskList = ({opcion}) => {
  return (
    <>
      <div className={TaskListStyles.container}>
          {
            opcion.length == 0 ?
              <h3>¡Tu carrito de compras está vacío!</h3>            
            :
              <>
              <h3>¡Carrito de compras!</h3>            
              {opcion.map((item, index) => {
                return <p key={index}>{item.actividad}</p>
              })}

              </>

          }
      </div>  
    </>
  )
}

export default TaskList