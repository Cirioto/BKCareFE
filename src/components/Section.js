import React, { useState } from "react";
import DragScroll from "./DragScroll";
import ModalBK from "./Modal/ModalBK";

function Section({ title, items }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="services-overview">
      <h1>{title}</h1>
      <DragScroll>
        <div className="specialty-links-container">
          {items.map((item, index) => (
            <div className="specialty-container" key={index}>
              <button onClick={() => setSelectedService(item)}>
                <div>
                  <img src={item.img} alt={item.text} />
                </div>
                <span>{item.text}</span>
              </button>
            </div>
          ))}
        </div>
      </DragScroll>

      {/* Hiển thị modal nếu có dịch vụ được chọn */}
      <ModalBK service={selectedService} onclose={() => setSelectedService(null)} />
    </div>
  );
}

export default Section;
