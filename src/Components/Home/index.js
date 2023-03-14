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
import Carosel from './Carosel'
const index = () => {
  return (
    <>
    <div className='flex flex-col gap-5'>
        <Navbar />
        <Carosel/>
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