import FormStyles from '../styles/Form.module.css'
import { useState } from 'react'
import SubmitFormOk from './SubmitFormOk'
const Form = () => {
    const validarString = (palabra) => {
        let respuesta = false;
        const numRegex = /[0-9]/;
        if(palabra.length >= 3 && !numRegex.test(palabra)){
            respuesta = true;
        }
        return respuesta;
    }
    const [customer, setCustomer] = useState({
        nombre: '',
        nickname: '',
        pokemon: ''
    })
    const [showForm, setShowForm] = useState(true);
    const [showError, setShowError] = useState(false);
    const handlerSubmit = (event) => {
        event.preventDefault();
        if(validarString(customer.nombre) && validarString(customer.nickname) && validarString(customer.pokemon)){
            setShowForm(false);
            setShowError(false);
        } else {
            setShowForm(true);
            setShowError(true);
        }
    }
  return (  
        <>
            {
                showForm ? 
                    <form action="#" className={FormStyles.mainContainer} onSubmit={handlerSubmit}>
                        <div className={FormStyles.formContainer}>
                            <div className={FormStyles.inputStyle}>
                                <label htmlFor="nombre">
                                    Nombre:
                                </label>
                                <input type="text" name="nombre" id="nombre" onChange={(event) => {setCustomer({...customer, nombre: event.target.value})}}/>

                            </div>
                            <div className={FormStyles.inputStyle}>
                                <label htmlFor="nickname">
                                    Nickname:
                                </label>
                                <input type="text" name="nickname" id="nickname" onChange={(event) => {setCustomer({...customer, nickname: event.target.value})}}/>

                            </div>
                            <div className={FormStyles.inputStyle}>
                                <label htmlFor="pokemon">
                                    Pokemon:
                                </label>
                                <input type="text" name="pokemon" id="pokemon" onChange={(event) => {setCustomer({...customer, pokemon: event.target.value})}}/>

                            </div>

                        </div>
                        <button className={FormStyles.btnStyle}>Enviar</button>
                    </form>
                : 
                <>
                    <SubmitFormOk customer={customer}/>
                </>

            }

            {
                showError ? <h2 className={FormStyles.showErrorForm}>Error en el formulario</h2> : null
            }
        

        </>      

  )
}

export default Form