import React, { createContext, useState } from 'react'
import "./App.css";
import Leftsidebar from './pages/Leftsidebar';
import Rightsidebar from './pages/Rightsidebar';
import Right from './pages/Right';
import icon1 from "./images/icon1.PNG";
import icon2 from "./images/icon2.PNG";
import icon3 from "./images/icon3.PNG";
import icon4 from "./images/icon4.PNG";
import RoutesAll from './RoutesAll';
import ReactSwitch from 'react-switch';
import Temp1 from './get/Temp1';
import rhome from "./images/rhome.png";
import clogo from "./images/clogo.png"



export const ThemeContext = createContext("null");


function App() {


const [theme, setTheme] = useState("light"); 

const toggleTheme = () => {
  setTheme((curr) => (curr === "light" ? "dark" : "light"));
}



  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div  >



    <div className='start' id={theme}>
    <div className="switch">
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
    <div className='app' >
      <div className='flex'>
      <div className='row'>
        <img src={icon1} width="20px" height="50px" className='img44' alt=""/>
        <img src={icon2} width="30px" height="50px" className='img44' alt=""/>
        <img src={icon3} width="30px" height="50px" className='img44' alt=""/>
        <img src={icon4} width="30px" height="50px" className='img44' alt="" />
      </div>
     <div> <Leftsidebar/></div>
     <div><Rightsidebar/> </div>
     <div><Right/> </div>
      </div>
    </div>
    </div>

<br />
<br />
<br />

{/* <div className='citi1'> 
  <img src={clogo} />
</div> */}

{/* 
<div className='citi'>
  <img src={rhome}  width="430px" className='city' />
</div> */}

    </div>
    </ThemeContext.Provider>
  )
}

export default App
//Gradient Hunt - Beautiful Color Gradients
