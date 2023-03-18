import './App.scss';
import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Work from './pages/work';


const App = () => {

  // const Person =(props) => {
  //   return (
  //     <>
  //     <h1>Name: {props.name}</h1>
  //     <h2>Last Name: {props.lastName}</h2>
  //     <h2>Age: {props.age}</h2>
  //     </>
  //   )
  // }
  
  // useState Example
  // const [counter, setCounter] = useState(0);
  
  // useEffect Example
  // useEffect(() => {
  //   alert("You've changed the counter to " + counter);
  // }, [counter]);

  return (
    // <>
    // <Navigation />
    // <Jumbotron />
    // </>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
