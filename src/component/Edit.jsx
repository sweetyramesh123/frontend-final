import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from 'react-icons/md';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaDeleteLeft } from 'react-icons/fa6';
import jobarray from '../assets/jobRole1.json';
import { updateResumeAPI } from '../services/allAPI';
import Swal from 'sweetalert2';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: 600,
  overflow: "auto"
};
function Edit({ resumeData,setresumeData }) {

  console.log(resumeData)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const skillref=useRef();

  const addskill=(inputSkill)=>{
    console.log(inputSkill);
    if(inputSkill){
      if(resumeData?.skill?.map(item=>item?.toLowerCase())?.includes(inputSkill?.toLowerCase())){
        alert('Given Skill exists!!!')
      }else{
        setresumeData({...resumeData,skill:[...resumeData.skill,inputSkill]})
      }
    }else{
      alert('Add your Skill!!1')
    }
  }
  const handleDeleteSkill = (deleteSkill)=>{
    setresumeData({...resumeData,skill:resumeData?.skill?.filter(item=>item!=deleteSkill)})
  }
  const handleUpdateResume = async () => {
      const { fullname, location, jobTitle, email, contact, linkedin, gitHub, degree, college, passout, skill, summary } = resumeData
      console.log(fullname, location, jobTitle, email, contact, linkedin, gitHub, degree, college, passout, skill, summary);
      if (fullname && location && jobTitle && email && contact && linkedin && gitHub && degree && college && passout && skill.length > 0 && summary) {
        try{
        const result = await updateResumeAPI(resumeData?.id,resumeData)
        console.log(result);
        if (result.status === 200) {
          Swal.fire({
            title: "Good job!",
            text: "Resume Updated Successfully!",
            icon: "success"
          });
          
          handleClose()
        } else {
          alert('oops!!1 Something went wrong!!! Try Again')
         
        }
      }catch(error){
        alert(`Something went wrong....Try again`)
      }
      }else{
        alert(`Fill the Data Completely!!!`)
      }
    }
  return (
    <>
    
      <div>
        <Button className='btn fs-2 me-2' onClick={handleOpen}><MdEditDocument /></Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Resume Data
            </Typography>
            <hr />
            <div>
              <h3>Personal Details</h3>
              <div className='row p-3 gap-3'>
                <TextField value={resumeData.fullname} onChange={(e)=>setresumeData({...resumeData,fullname:e.target.value})} id="standard-basic" label="Full Name" variant="standard" />
                <TextField value={resumeData.location} onChange={(e)=>setresumeData({...resumeData,location:e.target.value})} id="standard-basic" label="Location" variant="standard" />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Choose Job Title"
                    value={resumeData.jobTitle}
                    onChange={(e)=>setresumeData({...resumeData,jobTitle:e.target.value})}
                  >
                    {
                      jobarray.jobRoles.map((job, index) => (
                        <MenuItem key={job} value={job}>{job}</MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <h3>Contact Details</h3>
              <div className='row p-3 gap-3'>
                <TextField value={resumeData.email} onChange={(e)=>setresumeData({...resumeData,email:e.target.value})} id="standard-basic" label="Email" variant="standard" />
                <TextField value={resumeData.contact} onChange={(e)=>setresumeData({...resumeData,contact:e.target.value})} id="standard-basic" label="Contact Number" variant="standard" />
                <TextField value={resumeData.linkedin} onChange={(e)=>setresumeData({...resumeData,linkedin:e.target.value})} id="standard-basic" label="LinkedIn Link" variant="standard" />
                <TextField value={resumeData.gitHub} onChange={(e)=>setresumeData({...resumeData,gitHub:e.target.value})} id="standard-basic" label="GitHub Link" variant="standard" />
              </div>
            </div>
            <div>
              <h3>Educational Detials</h3>
              <div className='row p-3 gap-3'>
                <TextField value={resumeData.degree} onChange={(e)=>setresumeData({...resumeData,degree:e.target.value})} id="standard-basic" label="Bachelors Degree" variant="standard" />
                <TextField value={resumeData.college} onChange={(e)=>setresumeData({...resumeData,college:e.target.value})} id="standard-basic" label="University/College Name" variant="standard" />
                <TextField value={resumeData.passout} onChange={(e)=>setresumeData({...resumeData,passout:e.target.value})} id="standard-basic" label="Year of Graduation" variant="standard" />
              </div>
            </div>
            <div>
              <h3>Skills</h3>
              <div>
                <div className='d-flex gap-3 mb-3'>
                  <input ref={skillref} type="text" placeholder='Add your Skill' className='form-control' />
                  <button onClick={()=>addskill(skillref.current.value)} className='btn btn-dark'>Add</button>
                </div>
                {
                  resumeData?.skill?.map((item,index)=>(
                    <span key={index} className='border p-2 rounded me-2 mb-2 d-inline-block'>{item} <FaDeleteLeft className='text-danger'onClick={()=>handleDeleteSkill(item)} /></span>
                  ))
                }
              </div>
            </div>
            <div className='row mt-3'>
              <h3>Summary</h3>
              <TextField value={resumeData.summary} onChange={(e)=>setresumeData({...resumeData,summary:e.target.value})} id="standard-basic" label="Summary" variant="standard" />
            </div>
            <hr />
            <div className='d-flex justify-content-end gap-3'>
              <button className='btn'>Reset</button>
              <button className='btn btn-dark'onClick={handleUpdateResume}>Update</button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  )
}

export default Edit