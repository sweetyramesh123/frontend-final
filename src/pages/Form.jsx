import React, { useState } from 'react'
import UserInput from '../component/UserInput'
import Preview from '../component/Preview'

function Form() {
  const [resumeData, setresumeData] = useState({
      fullname: '', location: '', jobTitle: '', email: '', contact: '', linkedin: '', gitHub: '', degree: '', college: '', passout: '', skill: [], summary: ''
    })
  return (
    <>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-6'><UserInput resumeData={resumeData} setresumeData={setresumeData} /></div>
          <div className='col-lg-6'><Preview resumeData={resumeData}/></div>
        </div>
      </div>
    </>
  )
}

export default Form