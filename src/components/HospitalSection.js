import React from "react";
import Section from "./Section";

function HospitalSection() {
  const hospitals = [
    { img: "/img/hospital/1.webp", text: "Bệnh viện Hữu nghị Việt Đức" },
    { img: "/img/hospital/2.webp", text: "Bệnh viện Chợ Rẫy" },
    { img: "/img/hospital/3.webp", text: "Doctor Check - Tầm Soát Bệnh Để Sống Thọ Hơn" },
    { img: "/img/hospital/4.webp", text: "Bệnh viện FV" },
    { img: "/img/hospital/5.webp", text: "Bệnh viện Đa khoa An Việt" },
    { img: "/img/hospital/6.webp", text: "Phòng khám Chuyên khoa Nội An Phước" },
  ];

  return <Section title="Cơ Sở Y Tế" items={hospitals} />;
}

export default HospitalSection;
