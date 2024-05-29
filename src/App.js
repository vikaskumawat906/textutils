import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import About from './Components/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextForms from './Components/TextForms';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(4,39,67)';
      document.body.style.color = 'white'
      showAlert("Dark Mode Is On", "Sucess");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
      showAlert("Light Mode Is On", "Sucess");
    }

  };

  return (
    <Router>
      <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />} mode={mode} />
          <Route path="/" element={<Container><TextForms mode={mode} showAlert={showAlert} /></Container>} />

        </Routes>
      </>
    </Router>
  );
}

export default App;
