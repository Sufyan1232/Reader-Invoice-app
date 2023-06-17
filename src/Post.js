import React from 'react'
import "./New.css"
import heart from "./images/heart.png";
import trash from "./images/trash.png"
import { doc, deleteDoc } from "firebase/firestore";
import {db } from "./firebase"



function Post({ name, caption, imageUrl, date, month, title }) {

    const deleteDoc = (id) =>{
      db.collection('ruber').doc(id).delete()
      .then(() => {
          
      }).catch(() =>{
       
      })
    }



  return (
    <div>
    <div className='post'>
    <div className='post1'>
        <div className='postdiv'>
                <img src={imageUrl} width="200px" className='postimg'/>
                <h1 className='posth'>{date}</h1>
                <h3 className='posth'>{month}</h3>
                <img src={heart} width="30px" className='heart'/>
        </div>
        <div className='postdiv'>
            <h4 className='posth1'>{title}</h4>
            <button className='postbtn'>{name}</button>
            <p className='postp'>
           
                {caption}
            </p>     
           
            <a href='' className='postl'>read more</a>   
            <button className='trash'><img src={trash} width="25px"/></button>    
            <button className='delete' onClick={() => { deleteDoc( )}}>Are you sure you Delete the document</button>
        </div>
    </div>

    </div>
    </div>
  )
}

export default Post