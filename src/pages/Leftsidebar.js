import React from 'react';
import "./Page.css";
import Home from "../images/home.png";
import search from "../images/search.png";
import four from "../images/four.png";
import prototype from "../images/temp.png";
import stamp from "../images/stamp2.png";
import set from "../images/set.png";
import write from "../images/write.png";
import WidgetsIcon from '@mui/icons-material/Widgets';
import HomeIcon from '@mui/icons-material/Home';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import DrawIcon from '@mui/icons-material/Draw';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import SettingsIcon from '@mui/icons-material/Settings';



function Leftsidebar() {
  return (
    <div>
      
        <div className='leftsidebar'>
      <h2 className='read'>Re-ader</h2>
      <br/>
      <br/>


      <div className='alink'>
      <div className='l'><HomeIcon style={{ color: 'white',  height: 30, width: 30 }}  />   <a href='/' className='link'> Home</a></div>
      <div className='l'> <AllInboxIcon style={{ color: 'white', height: 30, width: 30 }} /> <a href='/newtemplate'className='link'>Templates</a></div>
      <div className='l'><DrawIcon  style={{ color: 'white', height: 30, width: 30 }} /> <a href='/upload'className='link'>Write</a></div>
     
      <div className='l'> <ManageSearchIcon  style={{ color: 'white', height: 30, width: 30 }} /> <a href='/newtemplate'className='link'>Discover</a></div>
      <div className='l'><img src={stamp} width="40px" /> <a href='/'className='link'>Stamps</a></div>
      <div className='l'> <WidgetsIcon style={{ color: 'white', height: 30, width: 30 }}  /> <a href='/'className='link'>Recommendations</a></div>
     
      
     <div className='l'> <SettingsIcon style={{ color: 'white',  height: 30, width: 30 }}  />  <a href='/'className='link'>Settings</a></div>
     </div>
     {/* <img src={four} width="30px" /> */}
     {/* <img src={Home} />   */}
     {/* <img src={prototype} width="30px" /> */}
     {/* <img src={write} width="30px" />  */}
     {/* <img src={search} width="30px" /> */}
 
      </div>



    </div>
  )
}

export default Leftsidebar
