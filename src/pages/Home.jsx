import { grey } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div style={{height:"100vh",backgroundImage:'url("https://ai-r-builder-dec25.vercel.app/landing.png")',backgroundAttachment:"fixed"}}
    className='d-flex justify-content-center align-item-center '>
      <div className='row container-fluid'>
      <div className='col-4'></div>
      <div className='col-4 rounded shadow p-5 text-center text-light' style={{backgroundColor:grey}}>
        <h3>Designed To get hired.
          Your Skills,Your Story,
          Your Next Job- All In One
        </h3>
        <Link to={"/steps"} style={{backgroundColor:"black"}} className='btn text-light'>Make your Resume With Ai</Link>
      </div>
      <div className='col-4'></div>
      </div>


    </div>
    <div className="container mb-5">
      <h1 className='text-center my-5 font-bolder'>What AI ResumeBulider</h1>
      <div className='row'>
        <div className='col-1'></div>
        <div className='col-5 p-3'>
          <p>An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations</p><p> to make the resume more effective and ATS (Applicant Tracking System) friendly.</p><p> The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF.</p>
        </div>
        <div className='col-1'></div>
        <div className='col-5'>
          <img src="https://ai-r-builder-dec25.vercel.app/landing.png" width={"100%"} height={"500px"}></img>
        </div>
      </div>
       
     {/* background */}
    </div>
    <div style={{backgroundImage:'url("https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?cs=srgb&dl=pexels-fauxels-3184360.jpg&fm=jpg")',height:"800vh",backgroundPosition:"center",backgroundSize:"cover",backgroundAttachment:"fixed"}}></div>

    {/* testimony */}

    <div className='container mb-5'>
      <h1 className='text-center my-5'>Testimony</h1>
      <div className='row align-item-center'>
        <div className='col-lg-1'></div>
        <div className='col-lg-5'>
          <h5>Trusted by Professionals WorldWide</h5>
          <p>
At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.

</p><p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p><p>

Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out</p>
        </div>
        <div className='col-lg-1'></div>
        <div className='col-lg-5'>
          <div className='row'>
            <div className='col-lg-3'>
              <img className='w-100 p-2' src="https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/2f93ecab-2aaa-4b12-af29-d0cb0eb2e368/Professional-Headshot-Vancouver" alt="user"/>
            </div>
            <div className='col-lg-3'>
              <img className='w-100 p-2' src="https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/2f93ecab-2aaa-4b12-af29-d0cb0eb2e368/Professional-Headshot-Vancouver" alt="user"/>
            </div>

            <div className='col-lg-3'>
              <img className='w-100 p-2' src="https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/2f93ecab-2aaa-4b12-af29-d0cb0eb2e368/Professional-Headshot-Vancouver" alt="user"/>
            </div>

            <div className='col-lg-3'>
              <img className='w-100 p-2' src="https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/2f93ecab-2aaa-4b12-af29-d0cb0eb2e368/Professional-Headshot-Vancouver" alt="user"/>
            </div>

            <div className='col-lg-3'>
              <img className='w-100 p-2' src="https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/2f93ecab-2aaa-4b12-af29-d0cb0eb2e368/Professional-Headshot-Vancouver" alt="user"/>
            </div>

            <div className='col-lg-3'>
              <img className='w-100 p-2' src="https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/2f93ecab-2aaa-4b12-af29-d0cb0eb2e368/Professional-Headshot-Vancouver" alt="user"/>
            </div>

            <div className='col-lg-3'>
              <img className='w-100 p-2' src="https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/2f93ecab-2aaa-4b12-af29-d0cb0eb2e368/Professional-Headshot-Vancouver" alt="user"/>
            </div>

            <div className='col-lg-3'>
              <img className='w-100 p-2' src="https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/2f93ecab-2aaa-4b12-af29-d0cb0eb2e368/Professional-Headshot-Vancouver" alt="user"/>
            </div>

            <div className='col-lg-3'>
              <img className='w-100 p-2' src="https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/2f93ecab-2aaa-4b12-af29-d0cb0eb2e368/Professional-Headshot-Vancouver" alt="user"/>
            </div>

            <div className='col-lg-3'>
              <img className='w-100 p-2' src="https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/2f93ecab-2aaa-4b12-af29-d0cb0eb2e368/Professional-Headshot-Vancouver" alt="user"/>
            </div>

            <div className='col-lg-3'>
              <img className='w-100 p-2' src="https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/2f93ecab-2aaa-4b12-af29-d0cb0eb2e368/Professional-Headshot-Vancouver" alt="user"/>
            </div>

            <div className='col-lg-3'>
              <img className='w-100 p-2' src="https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/2f93ecab-2aaa-4b12-af29-d0cb0eb2e368/Professional-Headshot-Vancouver" alt="user"/>
            </div>

          </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default Home