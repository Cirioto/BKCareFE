import React, { useState } from "react";
import SideMenu from "./SideMenu/SideMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); //Trạng thái đóng mở side menu

  return (
    <header>
      <div className="header-container">
        <div className="side-menu">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src="/img/side_menu.webp" />
          </button>
        </div>

        <div className="header-logo">
          <a href="#">
            <img src="/img/Logo.webp" />
          </a>
        </div>

        <nav className="header-options">
          <div>
            <div className="category-item">Tất cả</div>
            <div className="category-item">Tại nhà</div>
            <div className="category-item">Tại viện</div>
            <div className="category-item">Sống khỏe</div>
          </div>
          <input type="text" className="sreach-input" placeholder="Tìm kiếm"></input>
        </nav>

        <div className="header-actions">
          <div className="action-links">
            <a href="#">
              <div className="icon"></div>
              <span>Hợp tác</span>
            </a>
            <a href="#">
              <div className="icon"></div>
              <span>Liên hệ</span>
            </a>
          </div>
        </div>
      </div>

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}

export default Header;
