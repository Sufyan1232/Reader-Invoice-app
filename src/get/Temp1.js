import React, { useEffect, useState, useRef } from 'react'

import {useReactToPrint} from "react-to-print"
import { getDocs, collection }  from "firebase/firestore";
import { db } from "../firebase";
import t11 from "../images/t11.PNG";
import back from "../images/back.png"
// import { Print } from '@material-ui/icons';
import "./temp.css";
import spoon from "../images/fork.png";



function Temp1() {


  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data',
    onAfterPrint: () => alert('print success')
  })

    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "backup");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    });
    // function Template5({name, country,company, region, passport, designation,salary, salaryw, date}) {

  return (
  <div>
        <div>
            <a href='/' style={{pointer:"cursor"}} > <img src={back} /></a>
            <button onClick={handlePrint} className='print' > PRINT</button>
        </div>
       

         <div  ref={componentRef} style={{width: '100%', height: window.innerHeight}}>

          Allah Akbar
          {postLists.map((post) => {
           return(
            <React.Fragment>
                <div className='insert'>

                    <div><img src={t11} className='bimgt' alt='' /></div>
                    <div className='compni'>{post.company}</div>
                    <div className='compni1'>{post.company}  </div>
                    <div className='clogo'> <img src={spoon} width="190px" alt='' /> <br /> <p className='datet'> Date: helo world </p> </div>
                    <div><p className='to'>To,</p></div>
                    <div><p className='to'>Emirates NBD Bank</p></div>
                    <div><p className='salaryt'>Salary Certificate</p></div>
                    <div><p className='pt11'>This is to certify that <b>{post.name}</b> holding <b>{post.country}</b> passport No <b>{post.passport}</b> is working with our organization as <b>{post.designation}</b> since <b>{post.date}</b>. The company is paying a monthly salary of <b>{post.salary}</b> ({post.salaryw}). </p></div>
                    <div><p className='pt11'>This confimation has been issued upon the request of that employee and does not consititue a guarantee on our part towards any claim whatsoever against him. </p></div>
                    <div><p className='pt12'>Thanks & Regards,</p></div>
                    <div><p className='pt11'>HR manager </p></div>
                    <div><p className='pt13'> Mukhtar Ahmad</p></div>

                    <div className='uline'></div>
                    <div><p className='fott'>Al khawer Tower Office No: 98 Al Qusais 3, 
                      Dubai UAE PO Box: <br /> 10231 
                      Tel: 04 2831032 Email: Info@newdewanmianjeerestaurant.com<br />
                      Web:www.newdewanmianjeerestaurant.com</p></div>
                      </div>
                      hello world
                <br />
                <br />
              </React.Fragment>
           )
          })}
    </div>
</div>
  )
}

export default Temp1
