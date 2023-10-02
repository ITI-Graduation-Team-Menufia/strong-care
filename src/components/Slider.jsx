import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'

const Slider = () => {
    const images = [
        { src: "./images/1.jpg" ,caption: "ضمان اونلاين بضغطة زر" },
        { src: "./images/2.jpg"  ,caption: "خدمة ضمان متعددة" },
        { src: "./images/3.jpg"  ,caption: "ضمان طوبل الامد" },
        { src: "./images/4.jpg"  ,caption: "تعويض مضمون" },
        { src: "./images/5.jpg"  ,caption: "استجابة سريعة" },
      ];
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const image = images[currentImageIndex];

  const nextImage = () => {
    // Calculate the index of the next image
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    // Calculate the index of the previous image
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };
  
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 0.2}}
    className="container-fluid p-0 my-2">
    <div
      id="carouselExample"
      className="carousel slide"
      style={{ width: '100%', maxWidth: '1400px', height: '600px', maxHeight: '800px', overflow: 'hidden' }}
    >
      <AnimatePresence initial={false} exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <motion.img
          key={image.src}
          src={image.src}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          className="img-fluid w-100 h-100"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Responsive image style
          alt="Slider Image"
        />
      </AnimatePresence>
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 0.3}}
          exit={{ opacity: 0, y: 20 }}
          className="position-absolute text-white top-0 start-0 end-0 p-5"
          
        >
          <p className='float-end fs-1 fw-b text-gray' style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>{image.caption}</p>
        </motion.div>

      <button onClick={prevImage} className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button onClick={nextImage} className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </motion.div>
  )
}

export default Slider