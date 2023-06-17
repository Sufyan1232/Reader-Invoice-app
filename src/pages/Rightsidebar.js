import React from 'react'
import sach from "../images/sch.png"
import fish1 from "../images/fish1.png"
import "./Page.css";
import Get from '../Get';

function Rightsidebar({name}) {
  return (
    <div className='center'>
      <div>
        <form>
            <input className='search' type='text' placeholder='search your favourite templates'/>
            <img src={sach} width="40px" className='imgsch'   />
        </form>
      </div>
      <div className='banner'>
        {/* <img src="https://convertify.app/assets/img/logochicken.png" width="200px" className='banimg'/> */}
        
        <div className='ban'>
        <h1 className='ban1'>Make your document <br/> with Re-ader</h1>
        </div>
      </div>

<h3 className='color1'>Featured Template</h3>

<div className='disb1'>
<a href='/get1'className='alink22'>
<div className='elback'>
<div className='el'>
<h3 className='elh'>light</h3>
<p className='elh1'>this is very unique template and a premeium category</p>
<p className='elh2'>25 days</p>
</div>
</div></a>

<a href='/get8'className='alink22'>
<div className='elback8'>
<div className='el'>
<h3 className='elh'>monosecape</h3>
<p className='elh1'>this is very unique template and a premeium category</p>
<p className='elh2'>25 days</p>
</div>
</div></a>




</div>

<h3 className='color1'>Popular Template</h3>

<div className='disb1'>
<a href='/get2'className='alink22'>
<div className='elback2'>
<div className='el'>
<h3 className='elh'>wodnot</h3>
<p className='elh1'>this is very unique template and a premeium category</p>
<p className='elh2'>25 days</p>
</div>
</div></a>
<a href='/get9' className='alink22'>
<div className='elback9'>
<div className='el'>
<h3 className='elh'>black</h3>
<p className='elh1'>this is very unique template and a premeium category</p>
<p className='elh2'>25 days</p>
</div>
</div></a>


</div>








    </div>
  )
}

export default Rightsidebar
