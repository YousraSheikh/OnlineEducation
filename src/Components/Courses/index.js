import React from 'react'
import Courses from './CoursesSection'
import Navbar from '../Navbar'
import  SchoolPartner  from './SchoolPartner'
import CalendarSection from '../../Reuseables/CalenderSection'
import Footer from '../Footer'
import Feedback from '../../Reuseables/Feedback'
const index = () => {
  return (
    <>
        <div>
            <Navbar/>
            <Courses/>
            <SchoolPartner/>
            <CalendarSection/>
            <Feedback/>
            <Footer/>
        </div>
    </>
  )
}

export default index