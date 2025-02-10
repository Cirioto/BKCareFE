import React from "react";
import Section from "./Section";

function SpecialtySection() {
  const specialties = [
    { img: "/img/specialty-icon/1.webp", text: "Cơ Xương Khớp", doctor_name: "Võ Đặng" },
    { img: "/img/specialty-icon/2.webp", text: "Thần Kinh", doctor_name: "Võ Đặng" },
    { img: "/img/specialty-icon/3.webp", text: "Tiêu Hóa", doctor_name: "Võ Đặng" },
    { img: "/img/specialty-icon/4.webp", text: "Tim Mạch" },
    { img: "/img/specialty-icon/5.webp", text: "Tai Mũi Họng" },
    { img: "/img/specialty-icon/6.webp", text: "Cột Sống" },
    { img: "/img/specialty-icon/7.webp", text: "Y Học Cổ Truyền" },
    { img: "/img/specialty-icon/8.webp", text: "Châm Cứu" },
    { img: "/img/specialty-icon/9.webp", text: "Sản Phụ Khoa" },
  ];

  return <Section title="Chuyên Khoa" items={specialties} />;
}

export default SpecialtySection;
