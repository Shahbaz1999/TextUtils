import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  // let name="World";
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type: type
    })
    setTimeout(()=>{
     setAlert(null);
    },3000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils Dark Mode";
      setInterval(( )=>{
        document.title="TextUtils is Amazing";
      },2000)

    }
    else{
      setMode('light');
      document.body.style.backgroundColor="#f8f9fa";
      showAlert("light mode has been enabled","success");
      document.title="TextUtils Light Mode";

    }
  }
  return (
    <>
{/* <Navbar title='TextUtils' aboutText="About TextUtils"/> */}
{/* <Router> */}
<Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3">

{/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode}/>
          {/* </Route>
        </Switch> */}
        </div>
        {/* </Router> */}

{/* <Navbar /> */}

</>
  );
}

export default App;
