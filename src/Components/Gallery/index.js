import React, { useState } from 'react';
import Navbar from '../Navbar';
import GalleryFilter from './GalleryFilter';
import CalenderSection from '../../Reuseables/CalenderSection'
import Feedback from '../../Reuseables/Feedback';
import Footer from '../Footer'
const index = () => {
  return (
    <>
    <Navbar/>
    <GalleryFilter/>
    <CalenderSection/>
    <Feedback/>
    <Footer/>
    </>
  );
};

export default index