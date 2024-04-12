import React from "react";
import "./curtains.scss";
import CurtainsParallax from "./curtains_parallax/CurtainsParallax";
import curtain_1 from "../../assets/Images/webp/curtain_34.webp";

import CurtainCatalog from "./curtain_catalog/CurtainCatalog";
import PhotoGallery from "./curtains_photo_gallery/PhotoGallery";

const Curtains = () => {
  return (
    <div className="curtains">
    
        <div className="curtains-top">
        <div className="container">
          <h2 className="curtains__title">
            Pərdələr:&nbsp;
            <span
              style={{
                fontStyle: "italic",
                textTransform: "none",
                fontSize: "calc(1.4vw + 0.7rem)",
                fontWeight: "200",
              }}
            >
              İnteryerinizdə Dekor və Harmoniyanın Sirləri
            </span>
          </h2>
          <div className="curtains__top-block">
            <h4 className="curtains__preface">
              Pərdələr yalnız pəncərələr üçün "örtüklər" deyil, müstəqil və çox
              vacib dekorativ elementdir. Pərdələrin köməyi ilə interyerin
              üslubunu vurğulamaq, rəngləri və çalarları kölgələmək və ya
              artırmaq, kontrast yaratmaq və ya əksinə - otağın dizaynına
              yumşaqlıq əlavə edə bilərsiniz. İstənilən halda, pərdələr daxili
              dizaynın onsuz tamamlanmış sayıla bilməyəcəyi bir şeydir, onlar
              otaqda rahatlıq atmosferini böyük ölçüdə müəyyən edən dekorativ
              elementdir.
            </h4>

            <img
              src={curtain_1}
              alt="curtain_1"
              className="image-container__item"
            />
          </div>

          <h3 className="curtains__final-word">
            Beləliklə, pərdələr axtarırsınızsa, doğru yerə gəldiniz!
          </h3>
        </div>
      </div>
      <CurtainsParallax />
      <PhotoGallery />
      <CurtainCatalog />
    </div>
  );
};

export default Curtains;
