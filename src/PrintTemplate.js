import React , {useRef, useState} from 'react';
import {useReactToPrint} from "react-to-print"

function PrintTemplate() {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data',
    onAfterPrint: () => alert('print success')
  })

  return (
    <>
      print
      <div ref={componentRef} style={{width: '100%', height: window.innerHeight}} >
        <h1 className='"text-center my-3 border py-2'>Template</h1>
      </div>

      <button onClick={handlePrint}>Print This out</button>






    </>
  )
}

export default PrintTemplate
