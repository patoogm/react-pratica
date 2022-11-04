import React from 'react'

const Card = (props) => {
  return (
    <div className='d-flex justify-content-center my-5'>
      <div className="card" style={{width: "18rem"}}>
        <img src={props.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.mail}</p>
          <a href="/#" className={props.color}>Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

export default Card