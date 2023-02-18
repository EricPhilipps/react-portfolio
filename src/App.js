import logo from './logo.svg';
import './App.scss';
import { useState, useEffect } from 'react';
import Jumbotron from './jumbotron';
import Navigation from './navbar';

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
  
  // useState Example
  // const [counter, setCounter] = useState(0);
  
  // useEffect Example
  // useEffect(() => {
  //   alert("You've changed the counter to " + counter);
  // }, [counter]);

  return (
    <>
    <Navigation />
    <Jumbotron />
    </>
  );
}

export default App;
