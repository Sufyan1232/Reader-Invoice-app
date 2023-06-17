import React, { useEffect, useState } from 'react';
import { db  } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import "../App.css";
import cur from "../images/cur.jpg";
import {useNavigate} from "react-router-dom"
import back from "../images/back.png"

function Post2() {

    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [country, setCountry] = useState("");
    const [passport, setPassport] = useState("");
    const [designation, setDesignation] = useState("");
    const [salary, setSalary] = useState("");
    const [salaryw, setSalaryw] = useState("");
    const [company, setCompany] = useState("");
    const [comArabic, setComArabic] = useState("");
    const [nationality, setNationality] = useState("");
    const [hrname, setHrname] = useState("");
    const [pobox, setPobox] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState("");
    const navigate = useNavigate();

   
    const usersCollectionRef = collection(db, "backup");

const createUser = async () =>{
    await addDoc(usersCollectionRef, 
        { 
            name: newName,
            age: newAge,
            country: country,
            passport: passport,
            designation: designation,
            salary: salary,
            salaryw: salaryw,
            company: company,
            comArabic: comArabic,
            nationality: nationality,
            hrname: hrname, 
            pobox: pobox,
            address: address,
            date: date
            });
            navigate("/");
}

    



  return (
    <div className='form2'>


      <div className='uploadd'>
      <a href='/' style={{pointer:"cursor"}} > <img src={back} /></a>
        <h1 className='fill'> Fill the Form</h1>

<label className='label'>Name</label>
<input type='text' className='upinp'  placeholder='name' onChange={(event) => setNewName(event.target.value)} />

<label className='label'>Phone</label>
<input type="bumber"  className='upinp' placeholder='+91780000211' onChange={(event) => setNewAge(event.target.value)} />

<br />
<br />
<label className='label'>Country</label>
<input type='text' className='upinp' placeholder='country' onChange={(event) => setCountry(event.target.value)} />

<label className='label'>Passport</label>
<input type='text' className='upinp' placeholder='passport' onChange={(event) => setPassport(event.target.value)} />

<br />
<br />

<label className='label'>Designation</label>
<input type='text' className='upinp' placeholder='desgnation' onChange={(event) => setDesignation(event.target.value)} />

<label className='label'>Salary</label>
<input type='text' className='upinp' placeholder='salary' onChange={(event) => setSalary(event.target.value)} />
<br />
<br />

<label className='label'>Salary in Words</label>
<input type='text' className='upinp' placeholder='salaryw' onChange={(event) => setSalaryw(event.target.value)} />

<br />
<br />

<label className='label'> Company</label>
<input type='text'className='upinp'  placeholder='company' onChange={(event) => setCompany(event.target.value)} />

<label className='label'>Com Name</label>
<input type='text' className='upinp' placeholder=' name arabic' onChange={(event) => setComArabic(event.target.value)} />
<br />
<br />

<label className='label'>Nationality</label>
<input type='text' className='upinp' placeholder='natiob=nality' onChange={(event) => setNationality(event.target.value)} />


<label className='label'>Hr Name</label>
<input type='text' className='upinp' placeholder='hr name' onChange={(event) => setHrname(event.target.value)} />

<br />
<br />

<label className='label'>Po-box-num</label>
<input type='text' className='upinp' placeholder='Po box no' onChange={(event) => setPobox(event.target.value)} />



<label className='label'>Address</label>
<input type='text' className='upinp' placeholder='address' onChange={(event) => setAddress(event.target.value)} />

<br/>
<br />
<label className='label'>Joinnig Date</label>
<input type='text' className='upinp' placeholder='joinnig date ' onChange={(event) => setDate(event.target.value)} />

<br/>
<br />

<button onClick={createUser} className='send'>Send</button>


</div>

<div className='ques'>
    <img src={cur} />
</div>
     
    </div>
  )
}

export default Post2
