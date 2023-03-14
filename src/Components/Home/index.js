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
        <Navbar />
        <Carosel/>
        <IconsText/>
        <Courses/>
        <Learn/>
        <Training/>
        <PlansPricing/>
        <CalenderSection/>
        <Feedback/>
        <Footer />
    </>
  )
}

export default index