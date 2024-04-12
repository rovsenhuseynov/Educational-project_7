import React from "react";
import "./components/layout/layout.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/not_Found/NotFound";
import Curtains from "./pages/curtains/Curtains";
import Main from "./components/main/Main";
import FaqPage from "./pages/faqPage/FaqPage";
import Blinds from "./pages/blinds/Blinds";
import Bedspreads from "./pages/bedspreads/Bedspreads";
import Accessories from "./pages/accessories/Accessories";
import Discounts from "./pages/discounts/Discounts";
import Advantages from "./components/main/advantages/Advantages";
import Tulle from "./pages/curtains/curtain_catalog/catalogSlider/tulle/Tulle";
import Blackout from "./pages/curtains/curtain_catalog/catalogSlider/blackout/Blackout";
import Peculiarities from "./pages/curtains/curtain_catalog/catalogSlider/peculiarities/Peculiarities";
import ThickCurtains from "./pages/curtains/curtain_catalog/catalogSlider/thick_Curtains/ThickCurtains";
import Sunshade from "./pages/curtains/curtain_catalog/catalogSlider/sunshade/Sunshade";
import BonusSystem from "./components/main/advantages/bonus_system/BonusSystem";
import PhotoGallery from "./pages/curtains/curtains_photo_gallery/PhotoGallery";

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />

          <Route path="curtains">
            <Route index element={<Curtains />} />
            <Route path="tulle" element={<Tulle />} />
            <Route path="thick_curtains" element={<ThickCurtains />} />
            <Route path="subtle_blackout" element={<Sunshade />} />
            <Route path="blackout" element={<Blackout />} />
            <Route path="peculiarities" element={<Peculiarities />} />
          </Route>

          <Route path="photo_gallery" element={<PhotoGallery />} />
          <Route path="blinds" element={<Blinds />} />
          <Route path="bedspreads" element={<Bedspreads />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="*" element={<NotFound />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="discounts" element={<Discounts />} />
          <Route path="advantages" element={<Advantages />} />
          <Route path="bonus" element={<BonusSystem />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
