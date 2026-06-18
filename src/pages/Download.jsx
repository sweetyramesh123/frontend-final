import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { getAllResumesAPI, removeResumeAPI } from '../services/allAPI'
import { all } from 'axios'
function Downloads() {
  const[allResumes,setAllResume] = useState([])

  const getAllResumes=async()=>{
    const result = await getAllResumesAPI()
    console.log(result);
    setAllResume(result.data)
    
  }
  console.log(allResumes);
  const handleDeleteResume=async(id)=>{
    console.log(id);
    try{
      const result=await removeResumeAPI(id)
      console.log(result);
      getAllResumes()
      
    }catch(error){
    console.log(error);
    }
    
    
  }
  

  useEffect(()=>{
    getAllResumes()
  },[])
  return (
    <>
      <div className='container mt-5' style={{ height: '40vh' }}>
        <div className='d-flex justify-content-between'>
          <h1>Download Resume History</h1>
          <Link to={'/form'} className='text-decoration-none'>Back</Link>
        </div>
        <div className='row mt-5'>
          {
            allResumes?.length > 0 ?
            allResumes?.map((resume,index)=>(
              <div className='col-lg-4 col-md-6 col-sm-12 mb-3 shadow rounded'>
            <div className='d-flex justify-content-between p-3'>
              {/* <h6>Review at :12:15:20</h6> */}
              
              <button onClick={handleDeleteResume} className='btn fs-5 text-danger'><MdDeleteForever /></button>
            </div>
            <div className='m-3 text-danger'>
            <h3 className='fw-bold'>{resume?.fullname}</h3>
            <h5>{resume?.jobTitle}</h5>
            <h5>{resume?.location}</h5>
          </div>
          
          
        </div>
       

            ))
            :
            <div className='text-center mt-5'><h5>No Resume are added Yet!</h5></div>
          }
          
         </div>
        
      </div>
     
    </>
  )
}

export default Downloads