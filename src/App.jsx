
import './App.css'
import Download from './pages/Download'
import Form from './pages/Form'
import PageNotFound from './pages/PageNotFound'
import Steps from './pages/Steps'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ViewResume from './pages/ViewResume'
import Header from './component/Header'
import Footer from './component/Footer'
import Preview from './component/Preview'
 




function App() {
 
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/download' element={<Download/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/steps' element={<Steps/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
        <Route path='/preview' element={<Preview/>}/>
         <Route path='/view/:id/resume' element={<ViewResume/>}/>
         
      </Routes>
      <Footer/>
    </>
  )
}

export default App
