// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState(null);
  
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1500);

  }

  const toggleMode = () =>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#000045';
      showalert("Dark Mode has been enabled","success");
      
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      showalert("Light Mode has been enabled","success");
      
    }
  }
  return (
    <>
    <Navbar title='TxtUtils' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm mode={mode} showalert={showalert}/>
    {/* <Router>
      <div>
    
    
    <Switch>
          <Route exact path="/About">
            <About/>
          </Route>
          
          <Route exact path="/home">
            <TextForm mode={mode}/>
    
          </Route>
        </Switch>

        </div>
    </Router> */}
    
    </>
  );
}

export default App;
