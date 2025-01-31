import { useState } from 'react';

/**
 * The component illustrates how React batches updates.
 */
export default function Counter() {
  const [number, setNumber] = useState(0);

  /**
   * The arrow functions passed to setNumber are queued up and
   * executed in the order they were called, updating the state
   * each time. The final value of number will be 3.
   */
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1); // n = 0, returns 1
        setNumber(n => n + 1); // n = 1, returns 2
        setNumber(n => n + 1); // n = 2, returns 3
      }}>+3</button>
    </>
  )
}
