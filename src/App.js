import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BlogPage from './Pages/BlogPage';
import './App.css';
import Courses from './Pages/Courses';
import ShopPage from './Pages/ShopPage';
import FeaturePage from './Pages/FeaturePage';
import GalleryPage from './Pages/GalleryPage';
import ContactPage from './Pages/ContactPage';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/feature" element={<FeaturePage/>}/>
        <Route path="/gallery" element={<GalleryPage/>}/>
        <Route path="/Contact-Us" element={<ContactPage/>}/>
      </Routes>
    </>
  )
}

export default App;

