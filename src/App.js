import React from "react";
import Header from "./components/Header";
import IntroduceSection from "./components/IntroduceSection";
import ServicesOverview from "./components/ServicesOverview";
import SpecialtySection from "./components/SpecialtySection";
import HospitalSection from "./components/HospitalSection";
import "./index.css";

import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";

function App() {
  // Lấy thông tin ngôn ngữ và dữ liệu dịch từ Redux
  const lang = useSelector((state) => state.language.lang); //Lấy giá trị ngôn ngữ hiện tại từ Redux
  const translations = useSelector((state) => state.language.translations); //Lấy dữ liệu dịch ngôn ngữ (tất cả các chuỗi dịch) từ Redux

  return (
    // Cung cấp dữ liệu dịch và ngôn ngữ cho toàn bộ ứng dụng (Để sử dụng FormattedMessage)
    <IntlProvider locale={lang} messages={translations}>
      <div>
        <Header />
        <main>
          <IntroduceSection />
          <ServicesOverview />
          <SpecialtySection />
          <HospitalSection />
        </main>
      </div>
    </IntlProvider>
  );
}

export default App;
