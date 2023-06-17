import React , {useRef, useState} from 'react';
import {useReactToPrint} from "react-to-print"
import "./Template.css";
import  t from "../images/tz2.jpg"
import spoon from "../images/fork.png"
import cat from "../images/cat1.jpeg"
import t33 from "../images/t33.PNG"
// import { Print } from '@material-ui/icons';
import back from "../images/back.png"


function Template3({name, age,  country,  passport, designation,salary, salaryw, company, comArabic, nationality, hrname, pobox, addrees, region,  date}) {


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: 'emp-data',
      onAfterPrint: () => alert('print success')
    })



  return (

<>
<div className='topyo'>
<a href='/' style={{pointer:"cursor"}} > <img src={back} /></a>
<button onClick={handlePrint} className='print' > PRINT</button>
</div>
    <div ref={componentRef} style={{width: '100%', height: window.outerHeight}}>
        <div className='background'>
            
            {/* <div className='main'>
                <div className='m1'>
                <div className='triangle'> 

               <div className='tim'> <img src={food} className='timg' width="100px" /><h3 className='title1'>NEW DEWAN MIAN JEE RESTURANT LLC </h3> </div> 
                <h3 className='title'>NEW DEWAN MIAN JEE RESTURANT LLC </h3></div>
                <div className='trapezoid'></div>

               
                </div>
                
            
            </div> */}
<div className='main3' >
    <img src={t33} width="1320px" height="250px"/>
    <div className='hworld'>{company}</div>
</div>


<img src={spoon} className='spoon' width="220px" />
<p className='date'> Date: {date}</p>

<div className='font'>To,</div>
<div className='font'>Emirates NBO Bank</div>

<div className='fonts'>Salary Certificate</div>
<div className='font'>
    This is to Certify that <b> {name}</b> holding <b>{country}</b> passport No <b>{passport}</b> is working
    with our organization as <b> {designation} </b> since <b> {date} </b>. This company is paying a monthly
    salary of <b> {salary} </b>{salaryw}.
</div>
<div className='font1'>
    This confirmation has been issued upon the request of that employee and does not constitute a gurarantee on our part towrds any claim 
    whatsoever against him.

</div>
<div className='font'>Thanks & Regards</div>
<div className='font2'>HR Manger</div>
<div className='font'>{hrname}</div>

<div className='stamp'>
<div className='move22'>
<div className='movee'>
<div className='move1'> 
<h6 className='nh5'>{region}</h6>
<h5>{company}</h5>
</div></div></div>
</div>
<div className='uline'></div>
                    <div><p className='fott'>{addrees} PO Box: <br /> {pobox} 
                      Tel: {age} Email: Info@newdewanmianjeerestaurant.com<br />
                      Web:www.newdewanmianjeerestaurant.com</p></div>

        </div>
      
    </div>

    </>
  )
}

export default Template3
