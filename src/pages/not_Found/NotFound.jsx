import React, { useEffect } from "react";
import "./not_found.scss";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    // Добавляем класс к body при монтировании компонента
    document.body.classList.add("not-found-page");
    // Убираем класс при размонтировании компонента
    return () => {
      document.body.classList.remove("not-found-page");
    };
  }, []);

  return (
    <div className="not-found">
      <NavLink to="/" className='not-found__link' >
        <div className="not-found__question-mark-blog">
          <h1 className="not-found__question-mark-title">Page Not Found</h1>
        </div>
        <div className="not-found__text">
          <div className="text-p">
            <p>Oops! We were unable to find the page you were looking for.</p>
            <p>Please сlick anywhere in the window to go back or try again.</p>
          </div>
          <div className="not-found__404">
            <p>
              Error Code: <span>404</span>
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default NotFound;


