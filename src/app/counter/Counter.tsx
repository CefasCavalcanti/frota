'use client'
import { useAppSelector, useAppDispatch } from '../client/hooks'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <button
        aria-label="Decrement value"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <span className="py-2 px-4">{count}</span>
      <button
        aria-label="Increment value"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(increment())}
      >
        Incrementar
      </button>
    </>
  )
}
