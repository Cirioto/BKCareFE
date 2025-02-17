import React from "react";
import Section from "./Section";

function SpecialtySection() {
  const specialties = [
    { img: "/img/specialty-icon/1.webp", id: "specialty.musculoskeletal" },
    { img: "/img/specialty-icon/2.webp", id: "specialty.neurology" },
    { img: "/img/specialty-icon/3.webp", id: "specialty.digestive" },
    { img: "/img/specialty-icon/4.webp", id: "specialty.cardiology" },
    { img: "/img/specialty-icon/5.webp", id: "specialty.ent" },
    { img: "/img/specialty-icon/6.webp", id: "specialty.spine" },
    { img: "/img/specialty-icon/7.webp", id: "specialty.traditional_medicine" },
    { img: "/img/specialty-icon/8.webp", id: "specialty.acupuncture" },
    { img: "/img/specialty-icon/9.webp", id: "specialty.obstetrics_gynecology" },
  ];

  return <Section title="specialty.name" items={specialties} />;
}

export default SpecialtySection;
