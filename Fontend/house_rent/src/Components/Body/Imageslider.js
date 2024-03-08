import React, { useState, useEffect, useRef } from 'react';
import './imageslider.css';

const Carousels = () => {
  const itemsData = [
    { imageUrl: '/assets/images/3d-rendering-house-model.jpg', title: 'Item 1', },
    { imageUrl: '/assets/images/house-3d.jpg', title: 'Item 2', },
    { imageUrl: '/assets/images/3d-electric-car-building.jpg', title: 'Item 3', },
    { imageUrl: '/assets/images/house-3d-rendering-designs.jpg', title: 'Item 4', },
  ];

  const [items, setItems] = useState(itemsData);
  const [autoAdvanceTimeout, setAutoAdvanceTimeout] = useState(null);
  const [transitionTimeout, setTransitionTimeout] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDom = useRef();
  const prevDom = useRef();
  const carouselDom = useRef();

  const timeAutoNext = 5000;

  useEffect(() => {
    const runNextAuto = setTimeout(() => {
      nextDom.current.click();
    }, timeAutoNext);

    return () => {
      clearTimeout(autoAdvanceTimeout);
      clearTimeout(transitionTimeout);
      clearTimeout(runNextAuto);
    };
  }, [currentIndex, autoAdvanceTimeout, transitionTimeout]);

  const showSlider = (type) => {
    clearTimeout(autoAdvanceTimeout);

    if (type === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    }

    setAutoAdvanceTimeout(setTimeout(() => {
      nextDom.current.click();
    }, timeAutoNext));
  };

  return (
    <div className="carousel" ref={carouselDom}>
      <div className="list">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? 'active' : ''}`}
            style={{ zIndex: index === currentIndex ? 1 : 0 }}
          >
            <div className="item-content">
              <img src={item.imageUrl} alt={`Item ${index}`} />
              <div className="content">
                <div className="author">GHOR BARI</div>
                <div className="title">DESIGN YOUR</div>
                <div className="topic">DREAM</div>
                <div className="des" style={{ fontSize: "18px" }}>
                  <p>No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="thumbnail">
        {items.map((item, index) => (
          <div className="item" key={`thumbnail-${index}`}>
            <img src={item.imageUrl} alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </div>
      <div className='arrows'>
        <button ref={prevDom} onClick={() => showSlider('prev')}>{'<'}</button>
        <button ref={nextDom} onClick={() => showSlider('next')}>{'>'}</button>
      </div>
    </div>
  );
};

export default Carousels;



// import React, { useState } from 'react';
// import './imageslider.css';

// const Option = ({ background, onClick, isActive, label, icon, info }) => {
//   return (
//     <div
//       className={`option ${isActive ? 'active' : ''}`}
//       style={{ backgroundImage: `url(${background})` }}
//       onClick={onClick}
//     >
//       <div className="shadow"></div>
//       <div className="label">
//         <div className="icon">
//           <img src={icon} alt="Icon" />
//         </div>
//         <div className="info">
//           <div className="main">{label}</div>
//           <div className="sub">{info}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const OptionsContainer = () => {
//   const [activeIndex, setActiveIndex] = useState(2);

//   const handleOptionClick = (index) => {
//     setActiveIndex(index);
//   };

//   const optionsData = [
//     { background: '/assets/images/3d-rendering-house-model.jpg', label: 'Option 1', icon: '/assets/images/icon1.jpg', info: '3D Rendering House Model' },
//     { background: '/assets/images/house-3d.jpg', label: 'Option 2', icon: '/assets/images/icon2.jpg', info: 'Info for Option 2' },
//     { background: '/assets/images/3d-electric-car-building.jpg', label: 'Option 3', icon: '/assets/images/icon3.jpg', info: 'Info for Option 3' },
//     { background: '/assets/images/house-3d-rendering.jpg', label: 'Option 4', icon: '/assets/images/icon4.jpg', info: 'Info for Option 4' },
//     { background: '/assets/images/house-3d-rendering-designs.jpg', label: 'Option 5', icon: '/assets/images/icon5.jpg', info: 'Info for Option 5' },
//   ];

//   return (
//     <div className="options">
//       {optionsData.map((option, index) => (
//         <Option
//           key={index}
//           background={option.background}
//           onClick={() => handleOptionClick(index)}
//           isActive={index === activeIndex}
//           label={option.label}
//           icon={option.icon}
//           info={option.info}
//         />
//       ))}
//     </div>
//   );
// };

// export default OptionsContainer;
