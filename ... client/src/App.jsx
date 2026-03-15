import React from 'react'
import { Route,Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList  from './pages/student/CourseList'
import Coursedetails from './pages/student/Coursedetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import Mycourse from './pages/educator/Mycourse'
import Studentenrolled from './pages/educator/Studentenrolled'
import Navbar from './components/student/Navbar'
import "quill/dist/quill.snow.css";
import { ToastContainer } from 'react-toastify';

const App = () => {
 
  const isEducatorRoute = useMatch('/educator/*')
  

  return (
    <div className='text-default min-h-screen bg-white'>
      <ToastContainer />
      {!isEducatorRoute && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/course-list' element={<CourseList />}/>
        <Route path='/course-list/:input' element={<CourseList />}/>

        <Route path='/course/:id' element={<Coursedetails />}/>
        <Route path='/my-enrollment' element={<MyEnrollments />}/>
        <Route path='/player/:courseId' element={<Player />}/>
        <Route path='/loading/:path' element={<Loading />}/>
        <Route path='/educator' element={<Educator />}>
          <Route index element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse/>}/>
          <Route path='Mycourse' element={<Mycourse/>}/>
          <Route path='student-enroll' element={<Studentenrolled/>}/>
        </Route>


      </Routes>

      
    </div>
  )
}

export default App
