import React from 'react'
import Navbar from '../Navbar'
import IconsText from './IconsText'
import Learn from './Learn'
import CalenderSection from '../../Reuseables/CalenderSection'
import Training from './Training'
import Footer from '../Footer'
import Courses from './Courses'
import PlansPricing from './PlansPricing'
import Feedback from '../../Reuseables/Feedback'
import Slider from './Slider'
const index = () => {
  return (
    <>
        <Navbar />
        <Slider/>
        <div className='flex flex-col gap-5'>
        <IconsText/>
        <Courses/>
        <Learn/>
        <Training/>
        <PlansPricing/>
        <CalenderSection/>
    </div>
        <Feedback/>
        <Footer />
    </>
  )
}

export default index