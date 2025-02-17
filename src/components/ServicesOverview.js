import React, { useState } from "react";
import ModalBK from "./Modal/ModalBK";

import { FormattedMessage } from "react-intl";

import "./ServicesOverview.scss"

function ServicesOverview() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { img: "/img/icon-service/1.webp", id: "service.specialist" },
    { img: "/img/icon-service/2.webp", id: "service.remote" },
    { img: "/img/icon-service/3.webp", id: "service.general" },
    { img: "/img/icon-service/4.webp", id: "service.lab" },
    { img: "/img/icon-service/5.webp", id: "service.mental" },
    { img: "/img/icon-service/6.webp", id: "service.dental" },
    { img: "/img/icon-service/7.webp", id: "service.surgery" },
    { img: "/img/icon-service/8.webp", id: "service.diabetes" },
    { img: "/img/icon-service/9.webp", id: "service.healthtest" },
    { img: "/img/icon-service/10.webp", id: "service.nearby" },
  ];

  return (
    <div className="services-overview">
      <h1>
        <FormattedMessage id="service.title" />
      </h1>
      <div className="service-links-container">
        {services.map((service, index) => (
          <div className="service-container" key={index}>
            <img src={service.img} alt={service.text} className="service-img" />
            <button className="service-link" onClick={() => setSelectedService(service)}>
              <div className="service-item">
                <FormattedMessage id={service.id} />
              </div>
            </button>
          </div>
        ))}
      </div>

      <ModalBK service={selectedService} onclose={() => setSelectedService(null)} />
    </div>
  );
}

export default ServicesOverview;
