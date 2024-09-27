import React, {useState,useEffect,useRef} from "react";

const Two = () => {
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
    <div style={styles.container}>
      <div style={styles.appWrapper}>
            <h1>Count App</h1>
            <h2>count = {count}</h2>
            <button onClick={increment} style={{marginRight:'20px'}}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p>{counts.current}</p>
        </div>
     </div>

    )

}


const styles = {
    container: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    appWrapper: {
      borderRadius: "10px",
      padding: "40px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      width: "400px",
    },
  }

export default Two
