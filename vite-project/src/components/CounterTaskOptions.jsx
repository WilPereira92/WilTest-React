import { useState } from "react"
import CounterTaskOptionsStyles from "../styles/CounterTaskOptions.module.css"
const CounterTaskOptions = () => {
    const [counter, setCounter] = useState(0);

  return (
    <div className={CounterTaskOptionsStyles.container}>
        <button onClick={() => {setCounter(counter + 1)}} className={CounterTaskOptionsStyles.btn}>+</button>
        <h3>{counter}</h3>
        <button onClick={() => {setCounter(counter - 1)}} className={CounterTaskOptionsStyles.btn}>-</button>
    </div>
  )
}

export default CounterTaskOptions