import logo from './logo.svg';
import './App.scss';
import { useState, useEffect } from 'react';

const App = () => {
  const name = 'John';
  const showningName = true;

  const Person =(props) => {
    return (
      <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
      </>
    )
  }
  
  const [counter, setCounter] = useState(0);
  
  
  useEffect(() => {
    alert("You've changed the counter to " + counter);
  }, [counter]);
  
  return (
    <div className="App">
       <button onClick={() => setCounter((beforeCount) => beforeCount - 1)}> - </button>
       <h1> {counter} </h1>
       <button onClick={() => setCounter((beforeCount) => beforeCount + 1)}> + </button>
    </div>
  );
}

export default App;
