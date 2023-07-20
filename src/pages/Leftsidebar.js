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
import { Link } from 'react-router-dom';



function Leftsidebar() {
  return (
    <div>
      
        <div className='leftsidebar'>
      <h2 className='read'>Re-ader</h2>
      <br/>
      <br/>


      <div className='alink'>
      <div className='l'><HomeIcon style={{ color: 'white',  height: 30, width: 30 }}  />   <Link to='/' className='link'> Home</Link></div>
      <div className='l'> <AllInboxIcon style={{ color: 'white', height: 30, width: 30 }} /> <Link to='/newtemplate'className='link'>Templates</Link></div>
      <div className='l'><DrawIcon  style={{ color: 'white', height: 30, width: 30 }} /> <Link to='/upload'className='link'>Write</Link></div>
     
      <div className='l'> <ManageSearchIcon  style={{ color: 'white', height: 30, width: 30 }} /> <Link to='/newtemplate'className='link'>Discover</Link></div>
      <div className='l'><img src={stamp} width="40px" /> <Link to='/'className='link'>Stamps</Link></div>
      <div className='l'> <WidgetsIcon style={{ color: 'white', height: 30, width: 30 }}  /> <Link to='/'className='link'>Recommendations</Link></div>
     
      
     <div className='l'> <SettingsIcon style={{ color: 'white',  height: 30, width: 30 }}  />  <Link to='/'className='link'>Settings</Link></div>
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
