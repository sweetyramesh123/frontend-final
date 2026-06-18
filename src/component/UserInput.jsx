import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobarray from '../assets/jobRole1.json'
import skillArray from '../assets/jobSkills1.json';
import summaryData from '../assets/summaries1.json'
import Swal from 'sweetalert2';
import { addResumeAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

function UserInput({ resumeData, setresumeData }) {
  const steps = ['Basic Information', 'Contact Details', 'Educational Details', 'Preview & submit'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const navigate = useNavigate();
  // const [resumeData, setresumeData] = useState({
  //   fullname: '', location: '', jobTitle: '', email: '', contact: '', linkedin: '', gitHub: '', degree: '', college: '', passout: '', skill: [], summary: ''
  // })
  console.log(resumeData);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderStepContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>
          <h3>Personal Details</h3>
          <div className='row p-3 gap-3'>
            <TextField value={resumeData.fullname} onChange={(e) => setresumeData({ ...resumeData, fullname: e.target.value })} id="standard-basic" label="Full Name" variant="standard" />
            <TextField value={resumeData.location} onChange={(e) => setresumeData({ ...resumeData, location: e.target.value })} id="standard-basic" label="Location" variant="standard" />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Choose Job Title"
                defaultValue=""
                onChange={(e) => setresumeData({ ...resumeData, jobTitle: e.target.value })}
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
      )
      case 1: return (
        <div>
          <h3>Contact Details</h3>
          <div className='row p-3 gap-3'>
            <TextField value={resumeData.email} onChange={(e) => setresumeData({ ...resumeData, email: e.target.value })} id="standard-basic" label="Email" variant="standard" />
            <TextField value={resumeData.contact} onChange={(e) => setresumeData({ ...resumeData, contact: e.target.value })} id="standard-basic" label="Contact Number" variant="standard" />
            <TextField value={resumeData.linkedin} onChange={(e) => setresumeData({ ...resumeData, linkedin: e.target.value })} id="standard-basic" label="LinkedIn Link" variant="standard" />
            <TextField value={resumeData.gitHub} onChange={(e) => setresumeData({ ...resumeData, gitHub: e.target.value })} id="standard-basic" label="GitHub Link" variant="standard" />
          </div>
        </div>
      )
      case 2: return (
        <div>
          <h3>Educational Detials</h3>
          <div className='row p-3 gap-3'>
            <TextField value={resumeData.degree} onChange={(e) => setresumeData({ ...resumeData, degree: e.target.value })} id="standard-basic" label="Bachelors Degree" variant="standard" />
            <TextField value={resumeData.college} onChange={(e) => setresumeData({ ...resumeData, college: e.target.value })} id="standard-basic" label="University/College Name" variant="standard" />
            <TextField value={resumeData.passout} onChange={(e) => setresumeData({ ...resumeData, passout: e.target.value })} id="standard-basic" label="Year of Graduation" variant="standard" />
          </div>
        </div>
      )
      case 3: return (
        <div>
          <p>Our ai will generate skills and summary according to your job role.<b>Click generate Button</b> </p>
        </div>
      )
    }
  }
  const generatedata = () => {
    setresumeData({
      ...resumeData,
      skill: skillArray[resumeData.jobTitle],
      summary: summaryData[resumeData.jobTitle]
    })
    handleNext()
  }
  const handleAddResume = async () => {
    const { fullname, location, jobTitle, email, contact, linkedin, gitHub, degree, college, passout, skill, summary } = resumeData
    console.log(fullname, location, jobTitle, email, contact, linkedin, gitHub, degree, college, passout, skill, summary);
    if (fullname && location && jobTitle && email && contact && linkedin && gitHub && degree && college && passout && skill.length > 0 && summary) {
      try {
        const result = await addResumeAPI(resumeData)
        console.log(result);
        if (result.status == 201) {
          Swal.fire({
            title: "Good job!",
            text: "Resume Addes Successfully!!!",
            icon: "success"
          });

          navigate(`/view/${result.data.id}/resume`)
        } else {
          console.log(error);
          
          Swal.fire({
            title: "oops!",
            text: "Something went wrong",
            icon: "error"
          });
        }
      } catch (error) {
        console.log(error);
        
        Swal.fire({
          title: "oops!",
          text: "Something went wrong!!!",
          icon: "error"
        });
      }
    }else{
      Swal.fire({
          title: "oops!",
          text: "Fill the form completely!!!",
          icon: "info"
        });
    }
  }
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption"></Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Button style={{ marginRight: '10px' }} onClick={handleReset}>Reset</Button>
              <Button onClick={handleAddResume}>Finish</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            {
              renderStepContent(activeStep)
            }
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              {/* <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button> */}
              {
                activeStep === steps.length - 1 ?
                  <Button onClick={generatedata}>Generate Ai skills & Summary</Button> :
                  <Button onClick={handleNext}>Next</Button>
              }
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  )
}

export default UserInput