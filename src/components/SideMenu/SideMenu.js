import React from "react";
import "./SideMenu.css";

import { FormattedMessage } from "react-intl";

function SideMenu({ isOpen, onClose }) {
  const options = [
    { name: <FormattedMessage id="menu.home" />, url: "" },
    { name: <FormattedMessage id="menu.handbook" />, url: "" },
    { name: <FormattedMessage id="menu.partnership" />, url: "" },
    { name: <FormattedMessage id="menu.business_health" />, url: "" },
    { name: <FormattedMessage id="menu.clinic_digital" />, url: "" },
    { name: <FormattedMessage id="menu.recruitment" />, url: "" }
  ];

  if (!isOpen) return null;

  return (
    //Khi nhấn vào sẽ đóng menu
    <div className={`side-menu-overlay ${isOpen ? "active" : ""}`} onClick={onClose}>
      {/* Phòng khi nhấn vào sẽ không đóng menu */}
      <div className="side-menu_container" onClick={(e) => e.stopPropagation()}>
        <div className="side-menu__content">
          {options.map((item, index) => (
            <div key={index} className="side-menu__option">
              <a href={item.url}>{item.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
