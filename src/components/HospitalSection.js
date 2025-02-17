import React from "react";
import Section from "./Section";

function HospitalSection() {
  const hospitals = [
    { img: "/img/hospital/1.webp", id: "hospital.vietduc" },
    { img: "/img/hospital/2.webp", id: "hospital.choray" },
    { img: "/img/hospital/3.webp", id: "hospital.doctorcheck" },
    { img: "/img/hospital/4.webp", id: "hospital.fv" },
    { img: "/img/hospital/5.webp", id: "hospital.anviet" },
    { img: "/img/hospital/6.webp", id: "hospital.anphuoc" },
  ];

  return <Section title="hospital.name" items={hospitals} />;
}

export default HospitalSection;
