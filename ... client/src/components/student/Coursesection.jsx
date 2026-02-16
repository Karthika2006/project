
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Appcontext } from '../../context/Appcontext'
import CourseCard from './CourseCard'

const Coursesection = () => {
  const {allCourses} = useContext(Appcontext)

  return (
    <div className='py-16 md:px-40 px-8'>
    <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
    <p className='text-sm md:text-base text-gray-500 mt-3'>Discover our top-rated across various categories.From coding across 
    various categories. From coding and design to <br/> business and wellness, our courses are crafted to deliver results.
    </p>

    <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-3'>
        {allCourses.slice(0,4).map((course,index)=> <CourseCard key={index} course={course}/>)}
    </div>    


    <Link to={'/course-list'} onClick={()=>scrollTo(0,0)}
    className='mt-8 inline-block text-gray-600 border border-gray-400
             px-10 py-3 rounded hover:bg-blue-600 hover:text-white
             transition'
    >Show all courses
    </Link>

    </div>
    )
}

export default Coursesection
