import { useState } from 'react';

/**
 * When a user clicks on “buy”, the pending counter is incremented by 1. 
 * After 2 seconds, the pending counter becomes 0 and the completed counter is incremented by 1. 
 * For some reason, the counters do not update correctly. Fix the bug in the code.
 */
export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(p => p + 1); // updated to use a function to get the latest value of pending
    await delay(3000);
    setPending(p => p - 1); // updated to use a function to get the latest value of pending
    setCompleted(c => c + 1); // updated to use a function to get the latest value of completed
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy
      </button>
    </>
  );
}

function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}