import SubmitFormOkStyles from '../styles/SubmitFormOk.module.css'
const SubmitFormOk = ({customer}) => {
  return (
    <>
    <div className={SubmitFormOkStyles.container}>
        <h3>Bienvenido {customer.nombre}</h3>
        <h3>Sé que tu Nickname es {customer.nickname}</h3>
        <h3>Y tu pokemon favorito es {customer.pokemon}</h3>
    </div>
    <h2 className={SubmitFormOkStyles.container}>Elige tus tareas por hacer</h2>
    </>
  )
}

export default SubmitFormOk