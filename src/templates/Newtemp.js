import React from 'react'
import "../App.css";
import Leftsidebar from '../pages/Leftsidebar'
import Rightsidebar from '../pages/Rightsidebar';
import Right from '../pages/Right';
import icon1 from "../images/icon1.PNG";
import icon2 from "../images/icon2.PNG";
import icon3 from "../images/icon3.PNG";
import icon4 from "../images/icon4.PNG";
import Alltemp from '../pages/Alltemp';



function Newtemp() {
  return (
    <div>
        <div className='start'>
    <div className='app'>
      <div className='flex'>
      <div className='row'>
        <img src={icon1} width="20px" height="50px" className='img44'/>
        <img src={icon2} width="30px" height="50px" className='img44'/>
        <img src={icon3} width="30px" height="50px" className='img44'/>
        <img src={icon4} width="30px" height="50px" className='img44' />
      </div>
     <div> <Leftsidebar/></div>
     <div><Alltemp/> </div>
     <div><Right/> </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Newtemp
