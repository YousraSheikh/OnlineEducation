import React, { useState } from 'react';
import Navbar from '../Navbar';
import GalleryFilter from './GalleryFilter';
import Footer from '../Footer'
const index = () => {
  return (
    <>
    <Navbar/>
    <GalleryFilter/>
    <Footer/>
    </>
  );
};

export default index