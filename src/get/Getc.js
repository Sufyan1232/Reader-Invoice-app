// import { onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { db } from '../firebase';
// import Post from './Post';
import "../App.css";

import Template2 from '../templates/Template2';
import Bismillah from '../Bismillah';


function Getc() {

    // const [allDocs,setAllDocs] = useState([]);
    // const [singleDoc, setSingleDoc] = useState({});


    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        //this is where the code run
    db.collection('backup').onSnapshot(snapshot =>{
      setTemplates(snapshot.docs.map(doc => ({
       id: doc.id, 
       template: doc.data()
       
      }
      
       )));
       
    })
    
      },[]);


   

  return (
    <div className='getmargin'>
       
      
      <div className='getmargin'>
      {
    templates.map(({id, template}) => (
    <Bismillah key={id} name={template.name} country={template.country} 
    passport={template.passport} 
    designation={template.designation}
    salary={template.salary}
    date={template.date}
    salaryw={template.salaryw}
    company={template.company}
    region={template.region}

    />
     ))
    }
      </div>


    </div>
  )
}

export default Getc







