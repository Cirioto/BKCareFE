import React from "react";

import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

import "./IntroduceSection.scss";
function IntroduceSection() {
  const intl = useIntl(); // Lấy intl để truy cập dữ liệu ngôn ngữ

  return (
    <div className="introduce-section" style={{ backgroundImage: "url('/img/introduce.webp')" }}>
      <h2>
        <FormattedMessage id="introduction.title1" />
      </h2>
      <h2>
        <FormattedMessage id="introduction.title2" />
      </h2>
      <div className="chat-container">
        <textarea
          className="chat-input"
          placeholder={intl.formatMessage({ id: "introduction.placeholder" })}
        ></textarea>

        <img src="/img/send_icon.webp" className="chat-icon" />
      </div>
    </div>
  );
}

export default IntroduceSection;
