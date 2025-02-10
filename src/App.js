import React from "react";
import Header from "./components/Header";
import IntroduceSection from "./components/IntroduceSection";
import ServicesOverview from "./components/ServicesOverview";
import SpecialtySection from "./components/SpecialtySection";
import HospitalSection from "./components/HospitalSection";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <IntroduceSection />
        <ServicesOverview />
        <SpecialtySection />
        <HospitalSection />
      </main>
    </div>
  );
}

export default App;
