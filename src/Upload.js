import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, db } from './firebase';
// import { Button } from '@material-ui/core';
import gigh from "./images/gigh.gif"
import "./App.css";
import back from "./images/back.png"
// import { ref, uploadBytesResumable,  getDownloadURL } from "firebase/storage";

import {  doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { userInputs } from './Source';

function Upload() {
    const [data, setData] = useState([]);

    const handleInput = (e) =>{
        const id = e.target.id;
        const value= e.target.value;

        setData({...data, [id]: value})
    }

    const handleAdd = async(e) =>{
        e.preventDefault();
        try{
            const res = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await setDoc(doc(db, "backup", res.user.uid),{
                ...data,
                timeStamp: serverTimestamp()
            })

        }catch(err){
            console.log(err);
        }
    }


  return (
    <div className='form2'>
      <div className='fbi'>

<a href='/' style={{pointer:"cursor"}} > <img src={back} /></a>

      <form onSubmit={handleAdd} className='formee' >
    
        <div className='fform'>
        <img src={gigh} width="150px" className='gigh' /><b className='fbold'>Fill the Required Detail</b>
              {userInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label className='labelf'>   {input.label}</label>
                  <input 
                  className='input'
                  id={input.id}
                  autocomplete="off"
                  type={input.type} placeholder={input.placeholder} onChange={handleInput} />
                </div>
              ))}
             
              <button  className='btn' type="submit">Send</button>
              </div>
            </form>
            </div>
    </div>
  )
}

export default Upload


