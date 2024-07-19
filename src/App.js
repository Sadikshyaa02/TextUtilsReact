// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  const [mode, setMode]=useState ('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };


  const toggleMode = () =>{
    if (mode ===  'light'){
      setMode ('dark');
      document.body.style.backgroundColor ='#212529';
       showAlert("Dark Mode is enabled","success");
      document.title="TextUtils-Dark Mode";
      // setInterval(() => {
      //   document.title="TextUtils is amazing";

      // },2000);
      // setInterval(() => {
      //   document.title="Install TextUtils Now";

      // },1500);
    }
    
    else {
      setMode ('light');
      showAlert("Light Mode is enabled","success");
      document.body.style.backgroundColor ='white';
      document.title="TextUtils- Light Mode";

    }
    
  }
      
  return (
<>
{/* <Navbar title="TextUtils"  aboutText= "About us" mode={mode} toggleMode ={toggleMode}/>
<div className="container my-3">
<TextForm heading = "Enter the Text to analyze" mode={mode}/>
<About/>


</div> */}

<BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
                <Alert alert={alert} />

        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" 
            element={<About mode={mode} />} ></Route>
            <Route exact path="/" element={
             <TextForm showAlert={showAlert} heading = "Enter the Text to analyze" mode={mode}/>
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
</>
  );
}

export default App;
