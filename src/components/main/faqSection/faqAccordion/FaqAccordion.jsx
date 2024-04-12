import React, { useState, useRef, useEffect } from "react";
import "./faq_accordion.scss";
import faqContent from "./faqContent ";
import arrow_direction from "../../../../assets/Images/svg/arrow_top/arrow-top_2.svg";
import { NavLink } from "react-router-dom";

function FaqAccordion() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [openIds, setOpenIds] = useState([]); // Состояние для отслеживания открытых вкладок
  const [heights, setHeights] = useState([]);
  // Рефы для хранения ссылок на содержимое вкладок
  const contentRefs = useRef(
    Array(faqContent.length)
      .fill(null)
      .map(() => React.createRef())
  );

  // Эффект для обновления высоты вкладок при изменении открытых вкладок
  useEffect(() => {
    const newHeights = contentRefs.current.map((ref, index) => ({
      id: index,
      height: ref.current.scrollHeight,
    }));
    setHeights(newHeights);
  }, [openIds]);

  // Обработчик клика на вкладке: изменяет стейт открытых вкладок
  const clickHandler = (id) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((openId) => openId !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <ul className="accordion">
      {faqContent.map((item, id) => (
        <li className="accordion__item" key={id}>
          {/* Заголовок вкладки с обработчиком клика */}
          <div className="accordion__item_top">
            <div className="accordion__item_top_left">
              <h4 className="accordion__item_serial-number">
                {item.serial_number}
              </h4>

              {/* <div className="accordion__item_title">{item.question}</div> */}
              <div
                className={`accordion__item_title ${
                  openIds.includes(id) ? "open" : ""
                }`}
              >
                {item.question}
              </div>
            </div>
            <button
              className={`accordion__item_arrow ${
                openIds.includes(id) ? "open" : ""
              }`}
              onClick={() => clickHandler(id)}
            >
              <img src={arrow_direction} alt="arrow to open and close a tab" />
            </button>
          </div>

          {/* Содержимое вкладки с анимированными стилями */}
          <div
            className={`accordion__item_collapse ${
              openIds.includes(id) ? "open" : ""
            }`}
            style={{
              maxHeight: openIds.includes(id)
                ? `${heights.find((h) => h.id === id)?.height}px`
                : 0,
            }}
          >
            {/* Референс для измерения высоты содержимого */}
            <div ref={contentRefs.current[id]}>
              <p className="accordion__item_text">{item.answer}</p>
            </div>
          </div>
        </li>
      ))}
      <NavLink to="faq" className="accordion__faq-details_link" onClick={scrollToTop}>
        <h6 className="accordion__faq-details_button">Daha ətraflı</h6>
      </NavLink>
    </ul>
  );
}

export default FaqAccordion;
