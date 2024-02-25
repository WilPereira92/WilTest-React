import { useState } from "react"
import CounterTaskOptionsStyles from "../styles/CounterTaskOptions.module.css"
const CounterTaskOptions = ({actividad, opcion, setList}) => {
    const [counter, setCounter] = useState(0);
    const addCart = () => {
        setList([...opcion, actividad]);
        additionBtn();
    }
    const removeCart = () => {   
        substractionBtn();
    }
    const additionBtn = () => {
        setCounter(counter + 1);
    }
    const substractionBtn = () => {
        setCounter(counter - 1);
    }
    console.log(opcion)
  return (
    <div className={CounterTaskOptionsStyles.container}>
        <button onClick={removeCart} className={CounterTaskOptionsStyles.btn}>-</button>
        <h3>{counter}</h3>
        <button onClick={addCart} className={CounterTaskOptionsStyles.btn}>+</button>
    </div>
  )
}

export default CounterTaskOptions