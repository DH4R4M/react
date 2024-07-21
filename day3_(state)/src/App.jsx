import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Name1,Name2 } from './components/StateExample';

function App() {

  const[obj, setobj] = useState({class: "12th", rollNo : 22});

  return (
    <div className="App">
      <Navbar/>
      <Name1/>
      <Name2/>

      <h1>Class : {obj.class}, <br/> r.No. : {obj.rollNo}</h1>
    </div>
  );
}

export default App;
