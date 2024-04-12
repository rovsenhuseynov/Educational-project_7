import React, { useState, useEffect, useRef } from "react";
import "./videoSection.scss";
import playImg from "../../../assets/video/play-button.svg";
import video1 from "../../../assets/video/interior design_1.mp4";
import thumbnailImg from "../../../assets/video/video-image1.jpg";

const VideoSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Проверяем, сохранено ли состояние модального окна в localStorage
    const savedModalState = localStorage.getItem("modalState");
    if (savedModalState) {
      setModalOpen(JSON.parse(savedModalState));
    }
  }, []);

  const openModal = () => {
    setModalOpen(true);
    // Сохраняем состояние модального окна в localStorage
    localStorage.setItem("modalState", JSON.stringify(true));
    // Начинаем воспроизведение видео после короткой задержки
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      }
    }, 30);
  };

  const closeModal = () => {
    setModalOpen(false);
    // Удаляем состояние модального окна из localStorage при закрытии
    localStorage.removeItem("modalState");
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.src = ""; // Установка пустой строки в src остановит воспроизведение видео
    }
  };

  const handleVideoClick = () => {
    if (isModalOpen) {
      closeModal();
    }
  };

  return (
    <div className="video-section">
      <div className="container">
        <h3 className="video-section__modal-overlay-title">
        Pərdə evinizdə rahatlıq yaratmaq üçün son toxunuşdur.
        </h3>
        {!isModalOpen && (
          <div className="thumbnail-container">
            <img
              src={thumbnailImg}
              alt="Thumbnail"
              className="thumbnail-image"
            />
            <button
              onClick={openModal}
              className="video-section__modal-overlay-btn-play"
            >
              <img src={playImg} alt="" />
            </button>
          </div>
        )}
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-overlay__content">
              <video
                ref={videoRef}
                width="100%"
                height="auto"
                controls
                onClick={handleVideoClick}
              >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
