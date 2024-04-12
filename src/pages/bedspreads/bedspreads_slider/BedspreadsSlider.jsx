import React, { useState, useEffect } from "react";
import SwiperComponent from "../../../components/swiperComponent/SwiperComponent";
import ButtonLeft from "../../../components/button/button-left/ButtonLeft";
import ButtonRight from "../../../components/button/button-right/ButtonRight";
import slideData from "../BedspreadsData";
import "./bedspreadsSlider.scss";

const getSlidesPerView = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 1200) {
    return 3;
  } else if (windowWidth >= 700) {
    return 2;
  } else {
    return 1;
  }
};

const BedspreadsSlider = () => {
  const [swiper, setSwiper] = useState(null);
  const [isStartOfList, setIsStartOfList] = useState(true);
  const [isEndOfList, setIsEndOfList] = useState(false);
  const [singleSlideMode, setSingleSlideMode] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  const handleSwiperUpdate = (swiper) => {
    setSwiper(swiper);
    const { isBeginning, isEnd } = swiper;
    setIsStartOfList(isBeginning);
    setIsEndOfList(isEnd);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (swiper) {
      swiper.update();
      swiper.slideTo(selectedSlideIndex, 0, false);
    }
  }, [isZoomed, selectedSlideIndex, windowSize]);

  const handleLeftButtonClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleRightButtonClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handleSlideClick = (index) => {
    setSingleSlideMode(true);
    setSelectedSlideIndex(index);
    setIsZoomed(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseButtonClick = () => {
    setSingleSlideMode(false);
    setIsZoomed(false);
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";
  };

  const renderZoomedImage = () => {
    if (!isZoomed) return null;

    const selectedImage = slideData[selectedSlideIndex];

    return (
      <div className="fullscreen-overlay">
        <div
          className="fullscreen-image-container"
          onClick={handleCloseButtonClick}
        >
          <img
            src={selectedImage.image}
            alt={`Slide ${selectedSlideIndex + 1}`}
            className="fullscreen-image"
            loading="lazy"
          />
          <div className="zoom-out-icon" onClick={handleCloseButtonClick}></div>
          <div className="desc-container">
            <p className="desc-container__bedspread">{selectedImage.desc_bedspread}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className={`bedspreads-gallery ${
        singleSlideMode ? "single-slide-mode" : ""
      }`}
    >
      <div className="inner-container">
        <h2 className="bedspreads-gallery__title">
          Yataq örtükləri qalereyası
        </h2>
        <div className="bedspreads-gallery__container">
          {renderZoomedImage()}
          {!singleSlideMode && (
            <SwiperComponent
              slideData={slideData}
              selectedSlideIndex={selectedSlideIndex}
              handleSlideClick={handleSlideClick}
              handleSwiperUpdate={handleSwiperUpdate}
              swiper={swiper}
              singleSlideMode={singleSlideMode}
              getSlidesPerView={getSlidesPerView}
            />
          )}
        </div>
        {!isZoomed && (
          <div className="bedspreads-gallery__control-block-prev">
            <ButtonLeft
              onClick={handleLeftButtonClick}
              isStartOfList={isStartOfList}
            />
            <ButtonRight
              onClick={handleRightButtonClick}
              isEndOfList={isEndOfList}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default BedspreadsSlider;

// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Navigation,
//   Pagination,
//   A11y,
//   EffectFade,
//   Scrollbar,
//   Keyboard,
// } from "swiper/modules";
// import ButtonLeft from "../../../components/button/button-left/ButtonLeft";
// import ButtonRight from "../../../components/button/button-right/ButtonRight";
// import slideData from "../BedspreadsData";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./bedspreadsSlider.scss";

// const getSlidesPerView = () => {
//   const windowWidth = window.innerWidth;
//   if (windowWidth >= 1200) {
//     return 3;
//   } else if (windowWidth >= 700) {
//     return 2;
//   } else {
//     return 1;
//   }
// };

// const BedspreadsSlider = () => {
//   const [swiper, setSwiper] = useState(null);
//   const [isStartOfList, setIsStartOfList] = useState(true);
//   const [isEndOfList, setIsEndOfList] = useState(false);
//   const [singleSlideMode, setSingleSlideMode] = useState(false);
//   const [isZoomed, setIsZoomed] = useState(false);
//   const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//   });

//   const handleSwiperUpdate = (swiper) => {
//     setSwiper(swiper);
//     const { isBeginning, isEnd } = swiper;
//     setIsStartOfList(isBeginning);
//     setIsEndOfList(isEnd);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//       });
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (swiper) {
//       swiper.update();
//       swiper.slideTo(selectedSlideIndex, 0, false);
//     }
//   }, [isZoomed, selectedSlideIndex, windowSize]);

//   const handleLeftButtonClick = () => {
//     if (swiper) {
//       swiper.slidePrev();
//     }
//   };

//   const handleRightButtonClick = () => {
//     if (swiper) {
//       swiper.slideNext();
//     }
//   };

//   const handleSlideClick = (index) => {
//     setSingleSlideMode(true);
//     setSelectedSlideIndex(index);
//     setIsZoomed(true);
//     document.body.style.overflow = "hidden";
//   };

//   const handleCloseButtonClick = () => {
//     setSingleSlideMode(false);
//     setIsZoomed(false);
//     document.body.style.overflow = "auto";
//     document.body.style.overflowX = "hidden";
//   };

//   const renderSlider = () => {
//     return (
//       <Swiper
//         key={isZoomed}
//         modules={[
//           Navigation,
//           Pagination,
//           Scrollbar,
//           A11y,
//           EffectFade,
//           Keyboard,
//         ]}
//         slidesPerView={singleSlideMode ? 1 : getSlidesPerView()}
//         spaceBetween={15}
//         navigation
//         scrollbar={{ draggable: true }}
//         keyboard={{ enabled: true }}
//         initialSlide={selectedSlideIndex}
//         speed={800}
//         className="main-swiper"
//         onSwiper={handleSwiperUpdate}
//         onSlideChange={() => handleSwiperUpdate(swiper)}
//       >
//         {slideData.map((service, index) => (
//           <SwiperSlide
//             key={index}
//             className={`bedspreads-gallery__item ${
//               index === selectedSlideIndex ? "selected-slide" : ""
//             }`}
//             onClick={() => handleSlideClick(index)}
//           >
//             <img
//               src={service.image}
//               alt={`Slide ${index + 1}`}
//               className="bedspreads-gallery__item-image"
//               loading="lazy"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     );
//   };

//   const renderZoomedImage = () => {
//     if (!isZoomed) return null;

//     const selectedImage = slideData[selectedSlideIndex];

//     return (
//       <div className="fullscreen-overlay">
//         <div
//           className="fullscreen-image-container"
//           onClick={handleCloseButtonClick}
//         >
//           <img
//             src={selectedImage.image}
//             alt={`Slide ${selectedSlideIndex + 1}`}
//             className="fullscreen-image"
//             loading="lazy"
//           />
//           <div className="zoom-out-icon" onClick={handleCloseButtonClick}></div>
//           <div className="description">{selectedImage.desc_bedspread}</div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section
//       className={`bedspreads-gallery ${
//         singleSlideMode ? "single-slide-mode" : ""
//       }`}
//     >
//       <div className="inner-container">
//         <h2 className="bedspreads-gallery__title">
//           Yataq örtükləri foto qalereyası
//         </h2>
//         <div className="bedspreads-gallery__container">
//           {renderZoomedImage()}
//           {!singleSlideMode && renderSlider()}
//         </div>
//         {!isZoomed && (
//           <div className="bedspreads-gallery__control-block-prev">
//             <ButtonLeft
//               onClick={handleLeftButtonClick}
//               isStartOfList={isStartOfList}
//             />
//             <ButtonRight
//               onClick={handleRightButtonClick}
//               isEndOfList={isEndOfList}
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default BedspreadsSlider;
