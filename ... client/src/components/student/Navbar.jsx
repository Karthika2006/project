import React, { use, useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link,useLocation } from 'react-router-dom'
import { useClerk,UserButton,useUser } from '@clerk/clerk-react'
import { Appcontext } from '../../context/Appcontext'


const Navbar = () => {
  const {navigate, isEducator} = useContext(Appcontext)

  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');

  const {openSignIn} = useClerk()
  const {user} = useUser()

  return (
    <div className={` flex items-center justify-between px-4 sm:px-10 md:px-14
    lg:px-32 border-b border-gray-500 py-1 ${isCourseListPage ? 'bg-white' : 
    'bg-cyan-100/70'} `}>

      <img onClick={()=> navigate('/')} src={assets.jmp} alt='logo' className='w-28 lg:w-32 cursor-pointer' />
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
           <div className='flex items-center gap-5'>

          { user && 
          <>
            <button onClick={()=>{navigate('/educator')}}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}
            </button>
            <Link to='/my-enrollment'>MyEnrollment</Link>
          </>
          }
            
           </div>
           { user ? <UserButton/> :
           <button onClick={()=>openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>
            Create Account</button> }

      </div>

      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
          { user &&
          <>
            <button onClick={()=>{navigate('/educator')}}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}
            </button>
            <Link to='/my-enrollment'>MyEnrollment</Link>
          </>
          }
        </div>
        {
          user ? <UserButton/> :

        <button onClick={()=>openSignIn()}> <img src={assets.userimg} alt="pro" className="h-10 w-auto object-contain cursor-pointer"/> </button>
        }
      </div>
    </div>
  )
}

export default Navbar
