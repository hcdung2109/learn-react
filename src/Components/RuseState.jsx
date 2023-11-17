import React, {useState} from 'react';

const RuseState = () => {
    const [name, setName] = useState('Học useState');
    const [count, setCount] = useState(0)

    const handleClick = function () {
        //setCount(count + 1)

        setCount((prevState => prevState + 1))
    };

    const [infoUser, setInfoUser] = useState({
        name: 'Hoang Cong Dung',
        age: 32
    });

    const handleUpdate = () => {
        setInfoUser({
            ...infoUser,
            address: "Ha Noi"
        })
    }


    console.log('re-render');


    return (
        <div>
            <h3>Use State</h3>
            <p>{name}</p>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Click</button>
            <h3>VD 2 :</h3>
            <p>{ JSON.stringify(infoUser) }</p>
            <button onClick={handleUpdate}>Update</button>
            <h3>---- END useState</h3>
        </div>
    );
};

export default RuseState;