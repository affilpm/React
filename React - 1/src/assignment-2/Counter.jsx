import React, {useState,useEffect,useRef} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    let counts = useRef(0)

    useEffect(()=>{
            counts.current = counts.current + 1
       })



    const increment = () => {
        setCount(count+1);
    };

    const decrement = () => {
        setCount(count-1);
    };
    return(
        <div>
            <h1>Count App</h1>
            <h2>count = {count}</h2>
            <button onClick={increment} style={{marginRight:'20px'}}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p>{counts.current}</p>
        </div>
    )

}

export default Counter
