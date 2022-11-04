import React from 'react'
import './carousel.css'

const Carousel = (props) => {
  return (
    <div className='container my-5'>
      <div id={props.idCarousel} className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target={props.data} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target={props.data} data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target={props.data} data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://picsum.photos/id/233/200/300" className="d-block w-100 img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/id/234/200/300" className="d-block w-100 img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/id/237/200/300" className="d-block w-100 img" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={props.data} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={props.data} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel;
