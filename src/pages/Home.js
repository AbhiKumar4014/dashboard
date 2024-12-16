import { useState } from 'react';

function Home() {
      const [count, setCount] = useState(0);

      const increment = () => setCount(count + 1);
      const decrement = () => setCount(count - 1);
      const reset = () => setCount(0);
      console.log("Abhi");

    return (
        <div>
            <h1>Welcome to My Profile App</h1>
            <p>This is the home page of the application.</p>

            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset} style={{ marginLeft: '1em' }}>Reset</button>
        </div>
    );
}

export default Home;
