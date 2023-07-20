import React from 'react'
// import Template1 from './templates/Template1'
// import Template3 from './templates/Template2'
// import Template2 from './templates/Template3'
// import Template4 from './templates/Template4'
// import Template5 from './templates/Template5'
// import Template6 from './templates/Template6'
// import Template7 from './templates/Template7'
// import Template8 from './templates/Template8'
// import Template9 from './templates/Template9'
// import Template10 from './templates/Template10'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './App';
import Upload from './Upload';
import Get from './Get';
import Get1 from './get/Get1';
import Get2 from './get/Get2';
import Get10 from './get/Get10';
import Get4 from './get/Get4';
import Get5 from './get/Get5';
import Get6 from './get/Get6';
import Get7 from './get/Get7';
import Get8 from './get/Get8';
import Get9 from './get/Get9';
import Newtemp from './templates/Newtemp';
import Alltempates from './templates/Alltempates';
import Temp1 from './get/Temp1';
import Post2 from './get/Post2';

function RoutesAll() {
  return (
    <BrowserRouter>
        <div>
            <Routes>
            <Route exact path="/" element={<App/>} />
            <Route path="/newtemplate" element={<Newtemp/>} />    
            <Route path="/write" element={<Upload/>} />
            <Route path="/temp1" element={<Temp1/>} />
            <Route path="/upload" element={<Post2/>} />



            <Route path="/get" element={<Get/>} />
            <Route path="/get1" element={<Get1/>} />
            <Route path="/get2" element={<Get2/>} />
            <Route path="/get10" element={<Get10/>} />
            <Route path="/get4" element={<Get4/>} />
            <Route path="/get5" element={<Get5/>} />
            <Route path="/get6" element={<Get6/>} />
            <Route path="/get7" element={<Get7/>} />
            <Route path="/get8" element={<Get8/>} />
            <Route path="/get9" element={<Get9/>} />
            <Route path="/alltemplate" element={<Alltempates/>} />
            {/* <Route path="/template1" element={<Template1/>} />
                <Route path="/template2" element={<Template2/>} /> */}
                {/* 
                <Route path="/template3" element={<Template3/>} />
                <Route path="/template4" element={<Template4/>} />
                <Route path="/template5" element={<Template5/>} />
                <Route path="/template6" element={<Template6/>} />
                <Route path="/template7" element={<Template7/>} />
                <Route path="/template8" element={<Template8/>} />
                <Route path="/template9" element={<Template9/>} />
              <Route path="/template10" element={<Template10/>} /> */}
            </Routes>
        </div>    
    </BrowserRouter>
  )
}

export default RoutesAll
