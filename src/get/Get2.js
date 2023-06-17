// import { onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { db } from '../firebase';

import Template3 from '../templates/Template3';


function Get() {

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
       
       <div>Hello world</div>
      {
    templates.map(({id, template}) => (
    <Template3 key={id}  name={template.name} 
    age={template.age}
    country={template.country} 
    passport={template.passport} 
    designation={template.designation}
    salary={template.salary}
    date={template.date}
    salaryw={template.salaryw}
    company={template.company}
    comArabic = {template.comArabic}
    nationality={template.nationality}
    hrname={template.hrname}
    pobox={template.pobox}
    region={template.region}
    address={template.address}
    
    />
     ))
    }
     
</div>

    </div>
  )
}

export default Get







