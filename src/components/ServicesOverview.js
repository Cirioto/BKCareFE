import React, { useState } from "react";
import ModalBK from "./Modal/ModalBK";

function ServicesOverview() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { img: "/img/icon-service/1.webp", text: "Khám Chuyên Khoa" },
    { img: "/img/icon-service/2.webp", text: "Khám Từ Xa" },
    { img: "/img/icon-service/3.webp", text: "Khám Tổng Quát" },
    { img: "/img/icon-service/4.webp", text: "Xét Nghiệm Y Học" },
    { img: "/img/icon-service/5.webp", text: "Sức khỏe tinh thần" },
    { img: "/img/icon-service/6.webp", text: "Khám Nha Khoa" },
    { img: "/img/icon-service/7.webp", text: "Gói Phẫu Thuật" },
    { img: "/img/icon-service/8.webp", text: "Sống Khỏe Tiểu Đường" },
    { img: "/img/icon-service/9.webp", text: "Bài Test Sức Khỏe" },
    { img: "/img/icon-service/10.webp", text: "Y Tế Gần Bạn" },
  ];

  return (
    <div className="services-overview">
      <h1>Dịch vụ toàn diện</h1>
      <div className="service-links-container">
        {services.map((service, index) => (
          <div className="service-container" key={index}>
            <img src={service.img} alt={service.text} className="service-img" />
            <button className="service-link" onClick={() => setSelectedService(service)}>
              <div className="service-item">{service.text}</div>
            </button>
          </div>
        ))}
      </div>

      <ModalBK service={selectedService} onclose={() => setSelectedService(null)} />
    </div>
  );
}

export default ServicesOverview;
