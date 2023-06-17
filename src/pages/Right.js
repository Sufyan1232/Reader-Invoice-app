import React from 'react'
import "./Page.css";
import gift from "../images/gift.gif";

function Right() {
  return (
    <div className='rightdiv'>
        <br />
       <h3 className='color'>Members</h3>
      
        {/* avator */}
        <div className='gif'>.</div>
        <h3 className='name'>@Admin</h3>
        <h5  className='name1'>@usmanriaz</h5>

        <div className='dis1'>
            <div className='one1'>New Members</div>            
            <div className='one1'>See all</div> 
   
        </div>
        <div>
        <button className='member'>
                <img className='avat1' src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png' width="40px" /> <p className='avatp'>Sufyan Ahmad</p>
                <p className='avatp1'>1 day ago</p>
        </button> <br/>
        <button className='member'>
                <img className='avat2' src='https://as2.ftcdn.net/v2/jpg/01/24/30/67/1000_F_124306753_5lrF4qCOZLL2wFsyFfaJf6FprTTtcvnX.jpg' width="40px" /> <p className='avatp'>Sufyan Ahmad</p>
                <p className='avatp1'>1 day ago</p>
        </button> <br/>
        <button className='member'>
                <img className='avat2' src='https://cdn-5e344ff7f911c80ca0df760f.closte.com/wp-content/uploads/sites/103/2021/01/avatar06-11.jpg' width="40px" /> <p className='avatp'>Sufyan Ahmad</p>
                <p className='avatp1'>1 day ago</p>
        </button> <br/>
        <button className='member'>
                <img className='avat2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQn0SYe7tsgU49M2jh6J1dAMAzpz4JsEaCtHPzrvi3eJk4AWxRPc7urcsWdhkEG9Byos&usqp=CAU' width="40px" /> <p className='avatp'>Sufyan Ahmad</p>
                <p className='avatp1'>1 day ago</p>
        </button> <br/>
        </div>

        <div className='dis1'>
            <div className='one1'>Follow me</div>            
        </div>

        <button className='member'>
                <img className='avat1' src='https://img.icons8.com/fluency/256/instagram-new.png' width="40px" /> <p className='avatp'>Sufyan Ahmad</p>
               
        </button> <br/>
        <button className='member1'>
                <img className='avat1' src='https://img.icons8.com/fluency/1x/twitter-circled.png' width="40px" /> <p className='avatp'>Sufyan.09</p>
               
        </button> <br/>

    </div>
  )
}

export default Right
