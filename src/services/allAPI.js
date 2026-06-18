import { resume } from "react-dom/server";
import commonAPI from "./commonAPI";

//const serverURL ="http://localhost:3000"
const serverURL="https://realapp2.onrender.com"
// add resume

export const addResumeAPI =async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/resumes`,reqBody)
}

// get resume
export const getAParticularResumeAPI =async(resumeId)=>{
    return await commonAPI("GET",`${serverURL}/resumes/${resumeId}`,"")
}

//get all resume

export const getAllResumesAPI = async()=>{
    return await commonAPI("GET",`${serverURL}/resumes`,{})
}

// update resume

export const updateResumeAPI =async(resumeId,reqBody)=>{
    return await commonAPI("PUT",`${serverURL}/resumes/${resumeId}`,reqBody)
}
// delete resume

export const removeResumeAPI = async(resumeId)=>{
    return await commonAPI("DELETE",`${serverURL}/resumes/${resumeId}`,{})
}