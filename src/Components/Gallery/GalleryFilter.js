import React, {useState} from 'react'
import web from '../../Assests/web-development.jpg';
import graphics from '../../Assests/graphic-design.jpg';
import cloudComputing from '../../Assests/cloudcomputing.jpg';
import digitalMarketing from '../../Assests/digitalMarket.png';
import seo from '../../Assests/SEO.png';
const GalleryFilter = () => {
    const [filter, setFilter] = useState('all');
    const images = [
    {
      id: 1,
      category: 'Computer',
      src: web,
    },
    {
      id: 2,
      category: 'Computer',
      src: graphics,
    },
    {
      id: 3,
      category: 'Computer',
      src: cloudComputing,
    },
    {
      id: 4,
      category:'Science',
      src:  digitalMarketing,
    },
    {
        id: 5,
        category:'Science',
        src:  seo,
    },
    {
        id: 6,
        category: 'Computer',
        src: graphics,
    },
  ];
  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);
  return (
    <>
    <div className="flex flex-wrap justify-center">
      <div className="w-full mb-8 mt-8">
        <div className="flex justify-center">
          <button className="mr-4 border-2 w-[100px] p-[5px] bg-green font-bold text-white border-green rounded-md hover:bg-white hover:text-green hover:drop-shadow-xl" onClick={() => setFilter('all')}>
            All
          </button>
          <button className="mr-4 border-2 w-[100px] bg-green font-bold text-white border-green rounded-md hover:bg-white hover:text-green hover:drop-shadow-xl " onClick={() => setFilter('Computer')}>Computer</button>
          <button className="mr-4 border-2 w-[100px] bg-green font-bold text-white border-green rounded-md hover:bg-white hover:text-green hover:drop-shadow-xl" onClick={() => setFilter('Science')}>Science</button>
          <button className="mr-4 border-2 w-[100px] bg-green font-bold text-white border-green rounded-md hover:bg-white hover:text-green hover:drop-shadow-xl" onClick={() => setFilter('Biology')}>Biology</button>
          <button className="mr-4 border-2 w-[100px] bg-green font-bold text-white border-green rounded-md hover:bg-white hover:text-green hover:drop-shadow-xl" onClick={() => setFilter('History')}>History</button>        
        </div>
      </div>
      {filteredImages.map(img => (
        <div key={img.id} className="w-1/3 p-2">
          <img src={img.src} alt={img.category} className="w-full h-auto" />
        </div>
      ))}
    </div>
    </>
    
  )
}

export default GalleryFilter