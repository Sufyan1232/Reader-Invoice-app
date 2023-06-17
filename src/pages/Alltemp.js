import React from 'react'
import sach from "../images/sch.png"
import "./Page.css";

function Alltemp() {
  return (
    <div className='center'>
      <div>
        <form>
            <input className='search' type='text' placeholder='search your favourite templates'/>
            <img src={sach} width="40px" className='imgsch'   />
        </form>
      </div>

    

<h3 className='color1'>Featured Template</h3>
<h6 className='stampdd'>All Template with Oval Shape Stamp are here you have to choose one of them.</h6>

<div className='disb1'>
<a href='/get1' className='alink22'>
<div className='elback'>
<div className='el'>
<h3 className='elh'>lighter</h3>
<p className='elh1'>this is very unique template and a premeium category</p>
<p className='elh2'>25 days</p>
</div>
</div></a>



<a href='/get10' className='alink22'>
<div className='elback3'>
<div className='el'>
<h3 className='elh'>lighter</h3>
<p className='elh1'>this is very unique template and a premeium category</p>
<p className='elh2'>25 days</p>
</div>
</div></a>

</div>



<div className='disb1'>
<a href='/get'className='alink22'>
<div className='elback1'>
<div className='el'>
<h3 className='elh'>monosecape</h3>
<p className='elh1'>this is very unique template and a premeium category</p>
<p className='elh2'>25 days</p>
</div>
</div></a>

<a href='/get4'className='alink22'>
<div className='elback4'>
<div className='el'>
<h3 className='elh'>monosecape</h3>
<p className='elh1'>this is very unique template and a premeium category</p>
<p className='elh2'>25 days</p>
</div>
</div></a>




</div>

<h3 className='color1'>Popular Template</h3>
<h6 className='stampdd'>All Template with Rectangle Shape Stamp are here you have to choose one of them.</h6>

<div className='disb1'>
<a href='/get6' className='alink22'>
<div className='elback5'>
<div className='el'>
<h3 className='elh'>lighter</h3>
<p className='elh1'>this is very unique template and a premeium category</p>
<p className='elh2'>25 days</p>
</div>
</div></a>

<a href='/get7'className='alink22'>
<div className='elback6'>
<div className='el'>
<h3 className='elh'>monosecape</h3>
<p className='elh1'>this is very unique template and a premeium category</p>
<p className='elh2'>25 days</p>
</div>
</div></a>




</div>


<div className='disb1'>
<a href='/get5' className='alink22'>
<div className='elback7'>
<div className='el'>
<h3 className='elh'>lighter</h3>
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


<h3 className='color1'>New Templates</h3>
<h6 className='stampdd'>All Template with circle Shape Stamp are here you have to choose one of them.</h6>


<div className='disb1'>
<a href='/get9' className='alink22'>
<div className='elback9'>
<div className='el'>
<h3 className='elh'>lighter</h3>
<p className='elh1'>this is very unique template and a premeium category</p>
<p className='elh2'>25 days</p>
</div>
</div></a>

<a href='/get2'className='alink22'>
<div className='elback2'>
<div className='el'>
<h3 className='elh'>Emphess</h3>
<p className='elh1'>this is very unique template and a premeium category</p>
<p className='elh2'>25 days</p>
</div>
</div></a>




</div>










    </div>
  )
}

export default Alltemp
