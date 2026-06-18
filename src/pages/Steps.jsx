import React from 'react'
import { IoDocumentTextSharp } from 'react-icons/io5'
import { FaFileDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Steps() {
  return (
    <>
    <div style={{minHeight:'80vh'}} className='my-5'>
      <h1>Create an Ats Friendly Resume in Minutes with AI</h1>
      <div className='container my-5'>
        <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-4 rounded p-5 shadow text-center'>
          <IoDocumentTextSharp className='fs-1 text-primary mb-3'/>
          <h4>Add Your Details</h4>
          <p>Our AI will generate Skills $ Summary</p>
          <h5>Step 1</h5>
        </div>
        <div className='col-md-2'></div>
        <div className='col-md-4 rounded p-5 shadow text-center'>
          <IoDocumentTextSharp className='fs-1 text-primary mb-3'/>
          <h4>Download your Resume</h4>
          <p>Download PDF and strat applying</p>
          <h5>Step 2</h5>
        </div>
        
        <div className='col-md-1'></div>
        
        

      </div>
      <div className='text-center mt-5'>
        <Link to={'/form'} className='btn text-light' style={{backgroundColor:'black'}}>Let's Start</Link>

      </div>
      

    </div>
    </div>
    </>
  )
}

export default Steps