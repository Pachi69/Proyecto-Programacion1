import React from 'react';


function Carousel() {
  return (
    <div className="carousel-container">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require("../img/IMG_20140811_181921_976_resize.jpg")} className="d-block w-100 carousel-image" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require("../img/800px-Kart_ADAC_2006_EMS.jpg")} className="d-block w-100 carousel-image" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require("../img/2024-titouan-1.jpg")} className="d-block w-100 carousel-image" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  )
}
export default Carousel;
