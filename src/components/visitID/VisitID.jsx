import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import "./visitID.scss"; // Подключаем файл стилей

const VisitID = () => {
  const [visited, setVisited] = useState(false); // Состояние для отслеживания посещения
  const [showWelcome, setShowWelcome] = useState(false); // Состояние для отображения формы приветствия
  const [currentTime, setCurrentTime] = useState(new Date()); // Состояние для текущего времени
  const [isOpen, setOpen] = useState(true); // Состояние для отображения меню
  const [hovered, setHovered] = useState(false); // Состояние для отслеживания наведения на иконку гамбургера

  useEffect(() => {
    // Проверяем, был ли пользователь ранее на сайте, используя localStorage
    const isVisited = localStorage.getItem("visited");
    if (isVisited) {
      setVisited(true);
    } else {
      localStorage.setItem("visited", "true"); // Записываем в localStorage, что пользователь уже посетил сайт
      setShowWelcome(true); // Показываем форму приветствия только если это первое посещение
    }

    // Обновляем текущее время каждую секунду
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  const handleHamburgerClose = () => {
    setShowWelcome(false); // Закрываем форму приветствия при клике на крестик гамбургера
    setOpen(false); // Закрываем меню
  };

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const hamburgerColor = hovered ? "red" : "rgba(198, 159, 106, 1)";

  return (
    <div
      className={`visit-overlay ${showWelcome ? "" : "hidden"}`}
      onMouseEnter={() => setHovered(true)} // Устанавливаем hovered в true при наведении курсора мыши
      onMouseLeave={() => setHovered(false)} // Устанавливаем hovered в false при уводе курсора мыши
    >
      <div className="visit-message">
        <h2 className="visit-message__title">Saytımıza xoş gəlmisiniz!</h2>
        <p className="visit-message__text">
          {visited
            ? 'Bu bir bonus kartıdır, ətraflı bilgi almaq üçün onu bağlamadan "üstünlüklər" bölməsində "endirim sistemi"-nə daxil olun'
            : "С возвращением!"}
        </p>
        <p className="visit-message__time">{currentTime.toLocaleString()}</p>

        <div className="visit-message__hamburger-container">
          <Hamburger
            size={16}
            toggled={isOpen}
            toggle={toggleNav}
            color={hamburgerColor}
            onToggle={handleHamburgerClose}
          />
        </div>
        
      </div>
    </div>
  );
};

export default VisitID;






// import React, { useState, useEffect } from "react";
// import Hamburger from "hamburger-react";
// import "./visitID.scss"; // Подключаем файл стилей

// const VisitID = () => {
//   const [visited, setVisited] = useState(false); // Состояние для отслеживания посещения
//   const [showWelcome, setShowWelcome] = useState(false); // Состояние для отображения формы приветствия
//   const [currentTime, setCurrentTime] = useState(new Date()); // Состояние для текущего времени
//   const [isOpen, setOpen] = useState(true); // Состояние для отображения меню

//   useEffect(() => {
//     // Проверяем, был ли пользователь ранее на сайте, используя localStorage
//     const isVisited = localStorage.getItem("visited");
//     if (isVisited) {
//       setVisited(true);
//     } else {
//       localStorage.setItem("visited", "true"); // Записываем в localStorage, что пользователь уже посетил сайт
//       setShowWelcome(true); // Показываем форму приветствия только если это первое посещение
//     }

//     // Обновляем текущее время каждую секунду
//     const intervalId = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     // Очищаем интервал при размонтировании компонента
//     return () => clearInterval(intervalId);
//   }, []);

//   const handleHamburgerClose = () => {
//     setShowWelcome(false); // Закрываем форму приветствия при клике на крестик гамбургера
//     setOpen(false); // Закрываем меню
//   };

//   // const hamburgerColor = isOpen ? "rgba(198, 159, 106, 1)" : "";
//   const hamburgerColor = "rgba(198, 159, 106, 1)";

//   return (
//     <div className={`visit-overlay ${showWelcome ? "" : "hidden"}`}>
//       <div className="visit-message">
//         <h2>Saytımıza xoş gəlmisiniz!</h2>
//         <p>
//           {visited
//             ? 'Bu kart, məhsullarımıza endirim kuponunuz olabilər, onu bağlamadan əvvəl "üstünlüklər" bölməsinə daxil  olub detalları oxuyun'
//             : "С возвращением!"}
//         </p>
//         <p>{currentTime.toLocaleString()}</p>

//         <div className="visit-overlay__closing">
//           <Hamburger
//             size={24}
//             toggled={isOpen}
//             color={hamburgerColor}
//             hoverColor={"red"}
//             onToggle={handleHamburgerClose} // Передаем функцию handleHamburgerClose в компонент Hamburger через пропс onToggle
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisitID;
