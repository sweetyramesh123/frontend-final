import React, { useEffect, useState } from 'react'
import { FaBackward, FaFileDownload } from 'react-icons/fa'
import Preview from '../component/Preview'
import {Link, useParams} from 'react-router-dom'
import Edit from '../component/Edit'
import { getAParticularResumeAPI } from '../services/allAPI'
import html2canvas from 'html2canvas'

function ViewResume() {

  const [resumeData,setresumeData]=useState({})


  const {id} =useParams()
  console.log(id);

  const getResumeData=async ()=>{
    const result= await getAParticularResumeAPI(id)
    console.log(result);
    if(result.status==200)
    {
      setresumeData(result.data)
    }
  }

  const downloadPDF = async () =>{
    const input = document.getElementById("result") // to get the id
    const canvas = await html2canvas(input,{scale:2}) // convert the selected html to canvas(screenshot)
    const imgData = canvas.toDataURL("image/png") // convert canvas into imagr url

    //pdf

    const pdf = new jsPDF("P","mm","a4")
    const pdfWidth =pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width
    pdf.addImage(imgData,"png",0,0,pdfWidth,pdfHeight)
    pdf.save(`${resumeData?.fullname} - Resume.pdf`)
  }

  useEffect(()=>{
    getResumeData()
  },[id])
  
  return (
    <>
      <div className='container'>
        <div className='row my-3'>
          <div className='col-lg-2'></div>
            <div className='col-lg-8'>
              <div className='d-flex justify-content-center align-content-center gap-5'>
                <button onClick={downloadPDF} className='btn fs-3 me-2'><FaFileDownload/></button>
                <Edit  resumeData={resumeData} setresumeData={setresumeData}/>
                <Link to={'/form'} className='btn fs-2 me-2'><FaBackward/></Link>
              </div>
              <div className='mt-5'><Preview resumeData={resumeData}/></div>
            </div>
            <div className='col-lg-2'></div>
          </div>
        </div>
    </>
  )
}

export default ViewResume