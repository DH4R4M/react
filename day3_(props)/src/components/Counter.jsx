import React, { useState } from 'react';
import '../components/Counter.css'

function Counter() {
    const [count, setCount] = useState(0);

    function add() {
        setCount(count + 1);
    }

    function minus() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div>
          <h1>Count</h1>
            <h1>{count}</h1>
            <button onClick={add} className='add'>+</button>
            <button onClick={minus} disabled={count === 0} className='minus'>-</button>
            {/* ===: Strict equality operator */}
        </div>
    );
}

export default Counter;
