import React from 'react'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'
function Preview({resumeData}) {
  return (
    <>
      <div className='container w-100'>
        <h2>Full name:{resumeData.fullname}</h2>
        <h4>JOb:{resumeData.jobTitle}</h4>
        <p>Phone:{resumeData.contact}</p>
        <p>Email:{resumeData.email}</p>
        <p>LinkedIn:{resumeData.linkedin}</p>
        <p>Github:{resumeData.gitHub}</p>
        <p>Location:{resumeData.location}</p>
        <Divider>Proffesional Summary</Divider>
        <p>{resumeData.summary}</p>
        <Divider>Technical Skills</Divider>
        {
          resumeData?.skill?.map((num)=>(
            <span key={num}><Button variant='text'>{num}</Button></span>
          ))
        }
        <Divider>Education</Divider>
        <p>Bachelors Degree:{resumeData.degree}</p>
        <p>University/College name:{resumeData.college}</p>
        <p>Year of gradution:{resumeData.passout}</p>
      </div>
    </>
  )
}

export default Preview