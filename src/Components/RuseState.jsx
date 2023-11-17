import React, {useState} from 'react';

const RuseState = () => {
    const [name, setName] = useState('Học useState');
    const [count, setCount] = useState(0)

    const handleClick = function () {
        setCount(count + 1)
    }


    return (
        <div>
            <h3>Use State</h3>
            <p>{name}</p>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
};

export default RuseState;