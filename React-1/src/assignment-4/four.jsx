import React, { useState, useRef } from 'react';

function Four() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);



  const handleChange = (event) => {
    setInputValue(event.target.value);
  };




  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (inputValue.trim() === '') {
      console.log('Input cannot be empty');
      return;
    }

    console.log('Controlled Input Value:', inputValue);

    setInputValue('');
  };



  const handleUncontrolledSubmit = (event) => {
    event.preventDefault();

    const uncontrolledValue = inputRef.current.value;

    if (uncontrolledValue.trim() === '') {
      console.log('Input cannot be empty');
      return;
    }

    console.log('Uncontrolled Input Value:', uncontrolledValue);

    inputRef.current.value = '';
  };




  React.useEffect(() => {
    inputRef.current.focus();
  }, []);



  return (
    <div style={styles.container}>
      <div style={styles.appWrapper}>

      <h1>React Forms</h1>


      <form onSubmit={handleSubmit}>
        <label>
          Controlled Input:
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit Controlled</button>
      </form>


      <form onSubmit={handleUncontrolledSubmit}>
        <label>
          Uncontrolled Input:
          <input
            type="text"
            ref={inputRef}
          />
        </label>
        <button type="submit">Submit Uncontrolled</button>
      </form>
    </div>
    </div>

  );
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
export default Four;