import React, { useState } from "react";
import SideMenu from "./SideMenu/SideMenu";

// Có thể lấy dữ liệu từ các file en và vi.json
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/languageSlice";

import "./Header.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); //Trạng thái đóng mở side menu

  const intl = useIntl(); // Lấy intl để truy cập dữ liệu ngôn ngữ

  // Dùng để gọi action từ Redux
  const dispatch = useDispatch();
  // Lấy ngôn ngữ hiện tại từ Redux
  const lang = useSelector((state) => state.language.lang);

  const handleLanguageChange = (e) => {
    // Cập nhật Redux state khi thay đổi ngôn ngữ
    dispatch(setLanguage(e.target.value));
  };

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
          <div className="option">
            <div className="category-item">
              <FormattedMessage id="homeheader.menu.all" />
            </div>
            <div className="category-item">
              <FormattedMessage id="homeheader.menu.at-home" />
            </div>
            <div className="category-item">
              <FormattedMessage id="homeheader.menu.at-clinic" />
            </div>
            <div className="category-item">
              <FormattedMessage id="homeheader.menu.healthy-living" />
            </div>
          </div>
          <div className="search-box">
            <input
              type="text"
              className="sreach-input"
              placeholder={intl.formatMessage({ id: "homeheader.search.placeholder" })}
            />
            <img src="/img/search_icon.webp" />
          </div>
        </nav>

        <div className="header-actions">
          <div className="action-links">
            <a href="#">
              <div className="icon"></div>
              <span>
                <FormattedMessage id="homeheader.action.partner" />
              </span>
            </a>
            <a href="#">
              <div className="icon"></div>
              <span>
                <FormattedMessage id="homeheader.action.contact" />
              </span>
            </a>
          </div>
        </div>

        <div className="language_switch">
          <select value={lang} onChange={handleLanguageChange}>
            <option value="vi">VN</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}

export default Header;
