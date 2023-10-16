import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./counterSlice"
import { RootState } from "../../app/store"

export function Counter() {
  const count = useSelector((state: RootState) => state.counterR.count)
  const dispatch = useDispatch()

  const handleDec = () => {
    dispatch(decrement())
  }

  const handleInc = () => {
    dispatch(increment())
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleDec}> -</button>
      <button onClick={handleInc}> +</button>
    </div>
  )
}

export default Counter
