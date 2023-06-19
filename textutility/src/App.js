import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from 'react';
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = '#5b5b5b';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtility - Dark Mode"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtility - Light Mode"
    }
  }

  const [alert, setAlert] = useState(null);
  // alert is an object with two keys ie a message and a type
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Navbar title = "TextUtility" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      {/* A <Routes> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
        <Route exact path="/" element={<TextForm heading = "Enter the text to analyze" mode={mode} showAlert = {showAlert} />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
