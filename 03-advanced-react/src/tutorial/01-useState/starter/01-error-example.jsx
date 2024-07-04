import { useState } from 'react';

const ErrorExample = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
    <h2>{count}</h2>
    <button className='btn' onClick={() => setCount(count + 1)}>Increase</button>
  </div>
  )
};

export default ErrorExample;
