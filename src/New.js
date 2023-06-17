import React from 'react'
import "./New.css";
import space1 from "./images/space4.png"
import rocket from "./images/rocket1.png"
import About from './About';

function New() {
  return (
    <div>
        <div className='new'>

        <div className='new1'>
            <button className='nbtn'>Welcome to TreCatch</button>
            <h1 className='nh1'>Hi! I'm Chughtai Web designer</h1>
            <p className='nh2'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer
                 took a galley of type and scrambled
                  it to make a type specimen book
                  </p>

            <div>Let's Connect <img src='' /></div>
            
        </div>
        <div className=' bounce'><img src={space1} className="nimg1" /> </div>
        <div className='fly'><img src={rocket} width="150px"/> </div>



        </div>
        <About />
    </div>
  )
}

export default New
