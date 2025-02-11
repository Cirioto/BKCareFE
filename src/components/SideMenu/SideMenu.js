import React from "react";
import "./SideMenu.css";

function SideMenu({ isOpen, onClose }) {
  const options = [
    { name: "Trang chủ", url: "" },
    { name: "Cẩm nang", url: "" },
    { name: "Liên hệ hợp tác", url: "" },
    { name: "Sức khỏe doanh nghiệp", url: "" },
    { name: "Chuyển đổi số Phòng Khám", url: "" },
    { name: "Tuyển dụng", url: "" },
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
